import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1a2e1a] font-sans selection:bg-[#1a2e1a] selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <h1 className="font-serif text-xl font-bold tracking-tight uppercase leading-none">
              Horses for Heroes United
            </h1>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="#volunteer" className="hover:opacity-60 transition-opacity">Volunteer</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity border-b border-[#1a2e1a]">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FDFCF8] border-b border-[#1a2e1a]/10 px-6 py-8 flex flex-col gap-6 text-sm font-semibold uppercase tracking-widest animate-in fade-in slide-in-from-top-4">
            <a href="#about" onClick={toggleMenu}>About Us</a>
            <a href="#volunteer" onClick={toggleMenu}>Volunteer</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <h2 className="font-serif text-5xl md:text-7xl font-light mb-8 leading-[1.1]">
                Healing Through Intentional Partnership
              </h2>
              <p className="text-lg md:text-xl text-[#1a2e1a]/80 mb-12 font-light leading-relaxed max-w-2xl">
                A community-based coalition providing no-cost equine partnership experiences for Veterans in Coos County and Western Douglas County.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-4 bg-[#1a2e1a] text-white px-8 py-4 rounded-full hover:bg-[#2a452a] transition-all group"
              >
                <span className="text-sm font-semibold uppercase tracking-widest">Inquire Today</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-l from-[#FDFCF8] to-transparent z-10" />
            <img 
              src="/cohort-one.jpg"
              alt="Veteran interacting with a horse"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </section>

        {/* Branch Logos - Accessibility Fix */}
        <section className="px-6 py-12 border-y border-[#1a2e1a]/10 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
              <img src="https://www.army.mil/img/army-logo.svg" alt="U.S. Army Emblem - Serving those who served" className="h-12 w-auto" />
              <img src="https://www.marines.mil/Portals/63/Images/Marine_Corps_logo.png" alt="U.S. Marine Corps Emblem - Serving our Marines" className="h-12 w-auto" />
              <img src="https://www.navy.mil/Portals/1/navy_logo.png" alt="U.S. Navy Emblem - Serving our Sailors" className="h-12 w-auto" />
              <img src="https://www.af.mil/Portals/1/af_logo.png" alt="U.S. Air Force Emblem - Serving our Airmen" className="h-12 w-auto" />
              <img src="https://www.uscg.mil/Portals/0/Images/logo/uscg_logo.png" alt="U.S. Coast Guard Emblem - Serving our Guardians" className="h-12 w-auto" />
            </div>
          </div>
        </section>

        {/* About Us - Terminology Fix */}
        <section id="about" className="px-6 py-24 md:py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block px-4 py-1 border border-[#1a2e1a]/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Our Mission
              </div>
              <h3 className="font-serif text-4xl mb-8 leading-tight">Serving those who served us.</h3>
              <div className="space-y-6 text-[#1a2e1a]/80 leading-relaxed font-light">
                <p>
                  Horses for Heroes United is a community-led coalition dedicated to providing Veterans with a unique <strong>equine partnership experience</strong>. We operate out of Riley Arena in North Bend, Oregon.
                </p>
                <p>
                  By partnering with the North Bend VA and local organizations, we ensure that every Veteran can participate in this program <strong>at no cost</strong>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-8 rounded-2xl border border-[#1a2e1a]/5 shadow-sm">
                  <Shield className="w-6 h-6 mb-4 opacity-40" />
                  <h4 className="font-semibold mb-2">Safety First</h4>
                  <p className="text-sm text-[#1a2e1a]/60 font-light leading-relaxed">Professional handlers and a controlled environment.</p>
                </div>
                <div className="bg-[#1a2e1a] text-white p-8 rounded-2xl shadow-xl shadow-[#1a2e1a]/10">
                  <Heart className="w-6 h-6 mb-4 opacity-60" />
                  <h4 className="font-semibold mb-2 text-white">No Cost</h4>
                  <p className="text-sm text-white/70 font-light leading-relaxed">Fully funded by our community partners and donors.</p>
                </div>
              </div>
              <div className="pt-8">
                <div className="bg-white p-8 rounded-2xl border border-[#1a2e1a]/5 shadow-sm">
                  <Users className="w-6 h-6 mb-4 opacity-40" />
                  <h4 className="font-semibold mb-2">Community</h4>
                  <p className="text-sm text-[#1a2e1a]/60 font-light leading-relaxed">Join a network of fellow Veterans and supporters.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Footer / Contact */}
        <footer id="contact" className="bg-[#1a2e1a] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 mb-24">
              <div>
                <h3 className="font-serif text-4xl mb-12">Connect with us.</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                      <a href="mailto:contact@horsesforheroes.org" className="hover:text-white/60 transition-colors">contact@horsesforheroes.org</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</p>
                      <p>Riley Arena, North Bend, OR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="volunteer" className="bg-white/5 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
                <h4 className="text-xl font-medium mb-8">Program Inquiry</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="bg-transparent border-b border-white/20 py-3 text-sm focus:border-white outline-none transition-colors w-full" />
                    <input type="text" placeholder="Last Name" className="bg-transparent border-b border-white/20 py-3 text-sm focus:border-white outline-none transition-colors w-full" />
                  </div>
                  <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/20 py-3 text-sm focus:border-white outline-none transition-colors w-full" />
                  <textarea placeholder="Tell us how we can help" rows={4} className="bg-transparent border-b border-white/20 py-3 text-sm focus:border-white outline-none transition-colors w-full resize-none"></textarea>
                  <button className="w-full bg-white text-[#1a2e1a] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all mt-4">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
              <p>© 2024 Horses for Heroes United. All Rights Reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
