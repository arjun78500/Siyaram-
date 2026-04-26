import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CARS } from '../lib/constants';
import { ChevronRight, ShieldCheck, MapPin, Clock, CalendarDays, PhoneCall, Star } from 'lucide-react';

import { OptimizedImage } from '../components/OptimizedImage';

export function Home() {
  const featuredCars = CARS.filter(c => c.popular || c.luxury || c.bestValue).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Video Background */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(15,23,42,0.95)_100%)] z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 z-10" />
          <video 
            src="/hero-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80"
          ></video>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl py-24 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse border border-blue-400"></span> Premium Rental Punjab
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-center">
              Drive Premium.<br/>
              <span className="bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent italic underline decoration-blue-500/50">Travel Better.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 font-light mix-blend-screen">
              Premium Self Drive & Chauffeur Rental Service in Punjab. Experience the luxury of choice with our impeccable fleet.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/book"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg shadow-blue-900/20 hover:bg-blue-500 hover:shadow-blue-900/40 transition flex items-center group"
              >
                Book Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition" size={18} strokeWidth={3} />
              </Link>
              <Link
                to="/fleet"
                className="px-8 py-4 bg-slate-800/80 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-slate-700 transition flex items-center"
              >
                Explore Cars
              </Link>
              <a
                href="tel:+919817423513"
                className="px-8 py-4 bg-transparent text-white rounded-full font-bold uppercase tracking-wider text-sm hover:text-blue-400 transition flex items-center"
              >
                <PhoneCall className="mr-2" size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-12 relative z-30 -mt-16 rounded-t-[3rem] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] max-w-7xl mx-auto bg-slate-900 border border-white/10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <Star size={24} />
              </div>
              <h3 className="font-bold text-white tracking-widest uppercase text-xs">Clean Cars</h3>
              <p className="text-sm text-slate-400 mt-2">Impeccably maintained</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-white tracking-widest uppercase text-xs">Airport Drop</h3>
              <p className="text-sm text-slate-400 mt-2">Seamless transfers</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <CalendarDays size={24} />
              </div>
              <h3 className="font-bold text-white tracking-widest uppercase text-xs">Self Drive</h3>
              <p className="text-sm text-slate-400 mt-2">Flexible options</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-white tracking-widest uppercase text-xs">24/7 Support</h3>
              <p className="text-sm text-slate-400 mt-2">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-2">Our Fleet</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Featured Vehicles</h3>
            </div>
            <Link to="/fleet" className="hidden md:flex items-center text-slate-400 hover:text-white font-medium group uppercase tracking-widest text-xs">
              View all cars <ChevronRight className="ml-1 group-hover:translate-x-1 transition" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/80 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:bg-slate-800 transition-colors group p-2"
              >
                <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {car.popular && <span className="bg-blue-600/90 backdrop-blur-sm shadow-xl text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">Popular</span>}
                    {car.luxury && <span className="bg-white/10 backdrop-blur-sm shadow-xl border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">Luxury</span>}
                    {car.bestValue && <span className="bg-neutral-900/80 border border-white/10 backdrop-blur-sm shadow-xl text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">Best Value</span>}
                  </div>
                  <OptimizedImage
                    src={car.image}
                    alt={car.name}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-5 right-5 text-white font-bold text-2xl drop-shadow-xl flex items-baseline">
                    ₹{car.price.toLocaleString()}<span className="text-xs font-medium text-slate-400 ml-1 uppercase tracking-widest">/day</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{car.name}</h4>
                  <div className="flex gap-4 text-xs font-medium uppercase tracking-widest text-slate-400 mb-6">
                    <span className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"><ShieldCheck size={14} className="mr-1.5 text-blue-400" /> {car.transmission}</span>
                    <span className="flex items-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"><Star size={14} className="mr-1.5 text-blue-400" /> {car.seats} Seats</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to={`/book?car=${car.name}`}
                      className="w-full py-4 px-2 bg-blue-600 text-white text-center rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition"
                    >
                      Book Now
                    </Link>
                    <Link
                      to={`/fleet`}
                      className="w-full py-4 px-2 bg-white/5 border border-white/10 text-white text-center rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/fleet" className="inline-flex items-center text-slate-400 hover:text-white font-medium uppercase tracking-widest text-xs">
              View all cars <ChevronRight className="ml-1 flex-shrink-0" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
