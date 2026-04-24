import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Map, Car, Plane, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    { icon: <Plane size={32} />, title: 'Airport Pickup/Drop', desc: 'Punctual and reliable airport transfer services across Punjab from Chandigarh Airport.' },
    { icon: <MapPin size={32} />, title: 'Pickup & Drop', desc: 'Local and outstation pickup and drop services. Doorstep delivery available.' },
    { icon: <Users size={32} />, title: 'With Driver Rentals', desc: 'Chauffeur driven cars with experienced, professional, and well-behaved drivers.' },
    { icon: <Car size={32} />, title: 'Self Drive Rentals', desc: 'Experience the thrill of driving premium cars yourself with zero hidden charges.' },
    { icon: <Map size={32} />, title: 'Toll Service', desc: 'Fastag equipped cars for a seamless driving experience across state borders.' },
    { icon: <ShieldCheck size={32} />, title: 'Clean Car Guarantee', desc: 'Every car is deep cleaned and sanitized before every single rental.' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-transparent pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4"
        >
          Our <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent italic pr-2">Premium</span> Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
        >
          We go beyond just renting cars. Siyaraam offers an entire ecosystem of travel solutions to make your journey unforgettable.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 font-light">{service.desc}</p>
              
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900/40 backdrop-blur-3xl rounded-[2rem] p-12 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/10 rounded-full blur-[80px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Ready for your next journey?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 font-light">
            Book your favorite car today and experience premium comfort with Siyaraam Car Rental.
          </p>
          <Link to="/book" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all inline-block hover:shadow-blue-900/40">
            Book Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
