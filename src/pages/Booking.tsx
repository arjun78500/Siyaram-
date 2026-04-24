import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { CARS } from '../lib/constants';

export function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedCar = searchParams.get('car') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    car: preselectedCar,
    date: '',
    duration: '1',
    type: 'Self Drive',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Derive estimated fare
  const selectedCarData = CARS.find(c => c.name === formData.car);
  let fare = 0;
  if (selectedCarData) {
     const durationDays = parseInt(formData.duration) || 1;
     fare = selectedCarData.price * durationDays;
     // simple approximation: driver adds 500/day
     if (formData.type === 'With Driver') {
       fare += 500 * durationDays;
     }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate Booking ID
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `SYR-${randomId}`;

    try {
      // Save to Firebase
      await addDoc(collection(db, 'bookings'), {
        customerName: formData.name,
        phone: formData.phone,
        pickupLocation: formData.pickup,
        dropLocation: formData.drop,
        carId: formData.car,
        pickupDate: formData.date,
        duration: parseInt(formData.duration),
        type: formData.type,
        note: formData.note,
        status: 'pending',
        bookingId: bookingId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      // Prepare WhatsApp message
      const text = `Hello Siyaraam Car Rental,
I want to book a car.

*Booking ID:* ${bookingId}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Car:* ${formData.car}
*Date:* ${formData.date}
*Duration:* ${formData.duration} days
*Type:* ${formData.type}
*Estimated Fare:* ₹${fare}
*Note:* ${formData.note}

Please confirm booking.`;
      
      const encodedMsg = encodeURIComponent(text);
      const waUrl = `https://wa.me/919817423513?text=${encodedMsg}`;
      
      // Redirect to WhatsApp
      window.location.href = waUrl;
      
    } catch (error) {
      console.error("Error creating booking: ", error);
      alert("There was an error creating your booking. Please try again or call us directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-transparent pb-24 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/40 backdrop-blur-3xl rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden"
        >
          <div className="bg-white/5 border-b border-white/10 px-8 py-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">Book Your <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent italic pr-2">Ride</span></h1>
            <p className="text-slate-400 font-light">Fill in the details below. We will confirm your booking via WhatsApp.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Customer Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white placeholder-slate-500 font-medium" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white placeholder-slate-500 font-medium" placeholder="+91 XXXXX XXXXX" />
              </div>
              
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Select Car *</label>
                <select required name="car" value={formData.car} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white font-medium appearance-none">
                  <option value="" className="bg-slate-900">-- Choose a Car --</option>
                  {CARS.map(car => (
                    <option key={car.id} value={car.name} className="bg-slate-900">{car.name} (₹{car.price.toLocaleString()}/day)</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Rental Type *</label>
                <select required name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white font-medium appearance-none">
                  <option value="Self Drive" className="bg-slate-900">Self Drive</option>
                  <option value="With Driver" className="bg-slate-900">With Driver</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Pickup Location *</label>
                <input required type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white placeholder-slate-500 font-medium" placeholder="e.g. Chandigarh Airport" />
              </div>
              
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Drop Location *</label>
                <input required type="text" name="drop" value={formData.drop} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white placeholder-slate-500 font-medium" placeholder="e.g. Kharar" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Pickup Date & Time *</label>
                <input required type="datetime-local" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white font-medium [color-scheme:dark]" />
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Rental Duration (Days) *</label>
                <input required type="number" min="1" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white font-medium" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-slate-300 mb-2">Special Note (Optional)</label>
              <textarea name="note" value={formData.note} onChange={handleChange} rows={3} className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/5 transition-all text-white placeholder-slate-500 font-medium" placeholder="Any special requests?"></textarea>
            </div>

            {fare > 0 && (
              <div className="bg-blue-600/10 p-6 rounded-2xl border border-blue-500/20 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Estimated Fare</h4>
                  <p className="text-[10px] text-blue-300/70 mt-1 uppercase tracking-wider">Based on {formData.duration} days {formData.type === 'With Driver' ? '+ Driver charges' : ''}</p>
                </div>
                <span className="text-3xl font-black text-white">₹{fare.toLocaleString()}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 text-white text-sm tracking-widest uppercase font-bold rounded-xl transition-all shadow-lg ${isSubmitting ? 'bg-white/10 text-slate-500' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20 hover:shadow-blue-900/40'}`}
            >
              {isSubmitting ? 'Processing...' : 'Confirm & Send via WhatsApp'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
