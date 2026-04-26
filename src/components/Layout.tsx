import { motion } from 'motion/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MapPin, Instagram } from 'lucide-react';

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b,transparent)] opacity-40 mix-blend-screen pointer-events-none z-0"></div>
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-1/2 -right-24 w-80 h-80 bg-slate-400 rounded-full blur-[100px] opacity-10 pointer-events-none z-0"></div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/95 border-b border-white/10 shadow-sm py-4' : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-slate-400 rounded-lg flex items-center justify-center font-bold text-xl italic text-white shadow-lg shadow-blue-900/20">S</div>
            <span className="text-xl font-bold tracking-tight uppercase text-white">
              Siyaraam <span className="text-blue-400 font-light">Car Rental</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest ${
                  isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-300 hover:text-white'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <a href="tel:+919817423513" className="hidden lg:flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold text-white hover:bg-white/10 transition-all">
                +91 98174 23513
              </a>
              <Link
                to="/book"
                className="bg-blue-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 pt-24 px-4 flex flex-col space-y-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-bold uppercase tracking-widest text-white border-b border-white/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="w-full text-center px-6 py-4 bg-blue-600 text-white rounded-xl font-bold mt-4"
          >
            Book Now
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow relative z-10 w-full max-w-[100vw] overflow-hidden">
        <Outlet />
      </main>

      {/* Map Section */}
      <div className="w-full relative z-10 border-t border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13712.915729792942!2d76.6434407!3d30.7681313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sKharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1714037568194!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Siyaraam Car Rental Location"
          className="grayscale opacity-80 mix-blend-screen"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-white/10 text-white pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-slate-400 rounded-lg flex items-center justify-center font-bold italic text-white text-sm shadow-lg shadow-blue-900/20">S</div>
                <span className="text-lg font-bold tracking-tight uppercase text-white">
                  Siyaraam
                </span>
              </div>
              <p className="text-slate-400 mb-6 text-sm">
                Premium Self Drive & Chauffeur Rental Service in Punjab. Drive Premium. Travel Better.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-neutral-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-white transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                    <PhoneCall size={14} />
                  </div>
                  <span className="group-hover:text-white transition-colors">+91 9817423513</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                    <MapPin size={14} className="flex-shrink-0" />
                  </div>
                  <span className="group-hover:text-white transition-colors">Kharar, Punjab (Near STUC)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>
                  <a href="https://www.instagram.com/siyaraam_group.car_rental?igsh=MmJ1bWI2aWQ0enli" target="_blank" rel="noreferrer" className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-pink-600/20 group-hover:text-pink-400 transition-colors">
                      <Instagram size={14} />
                    </div>
                    <span className="group-hover:text-white transition-colors">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
             <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm font-medium tracking-wide uppercase">
            &copy; {new Date().getFullYear()} Siyaraam Car Rental. All rights reserved.
          </div>
        </div>
      </footer>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919817423513"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-[#25D366] text-white px-5 py-3 rounded-2xl shadow-xl shadow-green-900/20 hover:scale-105 transition-transform"
      >
        <div className="hidden md:flex flex-col text-right">
          <p className="text-[9px] uppercase font-bold opacity-80">Instant Booking</p>
          <p className="text-sm font-bold">Chat on WhatsApp</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
