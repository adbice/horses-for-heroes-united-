import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1a2e1a] font-sans selection:bg-[#1a2e1a] selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <h1 className="font-serif text-xl font-bold tracking-tight uppercase">Horses for Heroes United</h1>
          </a>
          
          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="#volunteer" className="hover:opacity-60 transition-opacity">Volunteer</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity border-b border-[#1a2e1a]">Contact</a>
          </nav>

          <button 
            className="md:hidden font-bold uppercase tracking-widest text-[10px] border border-[#1a2e1a] px-3 py-1 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#FDFCF8] border-b border-[#1a2e1a]/10 px-6 py-8 flex flex-col gap-6 text-sm font-semibold uppercase tracking-widest">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#volunteer" onClick={() => setIsMenuOpen(false)}>Volunteer</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
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
              <a href="#contact" className="inline-block bg-[#1a2e1a] text-white px-8 py-4 rounded-full hover:bg-[#2a452a] transition-all text-sm font-semibold uppercase tracking-widest">
                Inquire Today →
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10">
            <img src="/cohort-one.jpg" alt="Veteran and horse partnership" className="w-full h-full object-cover grayscale" />
          </div>
        </section>

        {/* Branch Logos Section */}
        <section className="px-6 py-12 border-y border-[#1a2e1a]/10 bg-white/50">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
            <img src="https://www.army.mil/img/army-logo.svg" alt="Army" className="h-10 w-auto" />
            <img src="https://www.marines.mil/Portals/63/Images/Marine_Corps_logo.png" alt="Marines" className="h-10 w-auto" />
            <img src="https://www.navy.mil/Portals/1/navy_logo.png" alt="Navy" className="h-10 w-auto" />
            <img src="https://www.af.mil/Portals/1/af_logo.png" alt="Air Force" className="h-10 w-auto" />
            <img src="https://www.uscg.mil/Portals/0/Images/logo/uscg_logo.png" alt="Coast Guard" className="h-10 w-auto" />
          </div>
        </section>

        {/* About Us & Mission Cards */}
        <section id="about" className="px-6 py-24 md:py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block px-4 py-1 border border-[#1a2e1a]/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Our Mission</div>
              <h3 className="font-serif text-4xl mb-8 leading-tight">Serving those who served us.</h3>
              <p className="text-[#1a2e1a]/80 leading-relaxed font-light mb-6">
                Horses for Heroes United provides a unique <strong>equine partnership experience</strong> at Riley Arena in North Bend, Oregon. We focus on the bond between Veteran and horse.
              </p>
              <p className="text-[#1a2e1a]/80 leading-relaxed font-light">
                Through our local partnerships, every Veteran participates in this program <strong>at no cost</strong>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-2xl border border-[#1a2e1a]/5 shadow-sm">
                <div className="font-bold mb-2 uppercase tracking-tighter text-xs">Safety First</div>
                <p className="text-xs text-[#1a2e1a]/60 font-light">Professional handlers and a controlled environment.</p>
              </div>
              <div className="bg-[#1a2e1a] text-white p-8 rounded-2xl shadow-xl">
                <div className="font-bold mb-2 uppercase tracking-tighter text-xs">No Cost</div>
                <p className="text-xs text-white/70 font-light">Fully funded by community donors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer & Contact Footer */}
        <footer id="contact" className="bg-[#1a2e1a] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-serif text-4xl mb-12">Connect with us.</h3>
              <p className="text-white/40 uppercase tracking-widest text-[10px] mb-2">Email</p>
              <a href="mailto:contact@horsesforheroes.org" className="text-xl hover:text-white/60 transition-colors">contact@horsesforheroes.org</a>
              <p className="mt-8 text-white/40 uppercase tracking-widest text-[10px] mb-2">Location</p>
              <p className="text-lg">Riley Arena, North Bend, OR</p>
            </div>
            
            <div id="volunteer" className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h4 className="text-xl mb-8 font-serif">Inquiry / Volunteer</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" />
                <textarea placeholder="How can we help?" rows={3} className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors resize-none"></textarea>
                <button className="w-full bg-white text-[#1a2e1a] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/10 text-center text-[10px] uppercase tracking-widest text-white/40">
            © 2026 Horses for Heroes United
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
