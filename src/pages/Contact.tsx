import { motion } from 'motion/react';
import { PhoneCall, Mail, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-transparent pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 text-center"
        >
          Contact <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent italic pr-2">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 text-center max-w-2xl mx-auto font-light"
        >
          Have questions or want to make a booking offline? We are always here to help you.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/60 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Get In Touch</h2>
            <div className="space-y-8">
              <a href="tel:+919817423513" className="flex items-start group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-blue-400 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Main Contact</h4>
                  <p className="text-xl font-bold text-white tracking-tight">+91 9817423513</p>
                </div>
              </a>
              <a href="tel:+919817423513" className="flex items-start group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-blue-400 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Secondary Contact</h4>
                  <p className="text-xl font-bold text-white tracking-tight">+91 9817423513</p>
                </div>
              </a>
              <a href="https://www.instagram.com/siyaraam_group.car_rental?igsh=MmJ1bWI2aWQ0enli" target="_blank" rel="noreferrer" className="flex items-start group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-pink-600/20 group-hover:text-pink-400 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Social Media</h4>
                  <p className="text-lg font-bold text-white tracking-tight">Instagram</p>
                </div>
              </a>
              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-blue-400 rounded-2xl flex items-center justify-center mr-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-lg font-medium text-slate-300">Near STUC, Kharar<br/>Punjab, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="bg-slate-900/60 p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img src="/Owner.jpg" alt="Owner" loading="lazy" decoding="async" className="w-24 h-24 rounded-full object-cover border-4 border-white/10 shadow-xl" />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Meet the Owner</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Dedicated to providing premium self-drive car rental experiences. We ensure our fleet is perfectly maintained for your safety and comfort.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-[2rem] flex-1 shadow-2xl border border-white/10 min-h-[300px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.163351980313!2d76.6432025150821!3d30.74189398163456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fede9d7a22abf%3A0xe6bf44b7f830302b!2sKharar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1689345678901!5m2!1sen!2sin" 
                className="w-full h-full rounded-[1.5rem] border-0 min-h-[300px] mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-80 hover:opacity-100" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
