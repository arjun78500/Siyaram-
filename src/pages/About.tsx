import { motion } from 'motion/react';
import { ShieldCheck, Users, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 min-h-screen bg-transparent pb-24 relative z-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
        >
          About <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent italic">Siyaraam</span>
        </motion.h1>
      </div>

      {/* Owner Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-slate-900/80 rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-96 md:h-auto relative overflow-hidden bg-slate-900">
              <img 
                src="/Owner.jpg" 
                alt="Amarjeet Malik - Owner of Siyaraam Car Rental"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-slate-950/20 md:to-slate-950/80"></div>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">Meet The Owner</h2>
              <h3 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">Amarjeet Malik</h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed italic mb-8 border-l-2 border-blue-500 pl-6">
                "Siyaraam Car Rental started 3 months ago with a vision to provide reliable, affordable and premium rental services in Punjab. We focus on clean cars, trust and customer comfort. Your journey is our priority."
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 text-blue-400 rounded-2xl flex items-center justify-center mr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl leading-none mb-1 tracking-tight">100+</h4>
                    <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Happy Customers</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 text-emerald-400 rounded-2xl flex items-center justify-center mr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl leading-none mb-1 tracking-tight">3+ Months</h4>
                    <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Experience</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 text-purple-400 rounded-2xl flex items-center justify-center mr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl leading-none mb-1 tracking-tight">24/7</h4>
                    <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
