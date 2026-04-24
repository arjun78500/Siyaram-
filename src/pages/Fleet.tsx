import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CARS } from '../lib/constants';
import { ShieldCheck, Star } from 'lucide-react';

export function Fleet() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredCars = CARS.filter(car => {
    const matchesFilter = filter === 'All' || car.type === filter || (filter === 'Luxury' && car.luxury);
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-transparent pb-24 relative z-10">
      <div className="pt-16 pb-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4"
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent italic pr-2">Premium</span> Fleet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Choose from our wide range of meticulously maintained vehicles. From economical hatchbacks to luxury SUVs.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900/40 backdrop-blur-2xl p-4 rounded-full shadow-2xl border border-white/10">
        <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          {['All', 'SUV', 'Sedan', 'Hatchback', 'Luxury'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition whitespace-nowrap ${
                filter === f ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="w-full md:w-64">
          <input 
            type="text" 
            placeholder="SEARCH CARS..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all font-medium text-xs tracking-widest placeholder-slate-500"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-2 overflow-hidden shadow-2xl hover:bg-white/10 transition-colors group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900 rounded-[1rem]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-xl flex items-baseline">
                  ₹{car.price.toLocaleString()}<span className="text-[10px] uppercase tracking-widest font-medium text-slate-400 ml-1">/day</span>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{car.name}</h4>
                  <div className="flex gap-3 text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-5">
                    <span className="flex items-center bg-white/5 px-2 py-1 rounded-md border border-white/5"><ShieldCheck size={12} className="mr-1 text-blue-400" /> {car.transmission}</span>
                    <span className="flex items-center bg-white/5 px-2 py-1 rounded-md border border-white/5"><Star size={12} className="mr-1 text-blue-400" /> {car.seats} Seats</span>
                  </div>
                </div>
                <Link
                  to={`/book?car=${car.name}`}
                  className="w-full py-3 bg-blue-600 text-white text-center rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {filteredCars.length === 0 && (
          <div className="text-center py-24 text-slate-500 text-sm tracking-widest uppercase font-medium">
            No cars found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
