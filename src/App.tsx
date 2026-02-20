import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1a2e1a] font-sans">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <h1 className="font-serif text-xl font-bold tracking-tight uppercase">Horses for Heroes United</h1>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="#volunteer" className="hover:opacity-60 transition-opacity">Volunteer</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity border-b border-[#1a2e1a]">Contact</a>
          </nav>

          {/* Mobile Menu Button - Standard HTML (No Icons) */}
          <button 
            className="md:hidden font-bold uppercase tracking-tighter text-[10px] border border-[#1a2e1a] px-3 py-1 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
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
              <a 
                href="#contact"
                className="inline-block bg-[#1a2e1a] text-white px-8 py-4 rounded-full hover:bg-[#2a452a] transition-all"
              >
                <span className="text-sm font-semibold uppercase tracking-widest">Inquire Today →</span>
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10">
            <img 
              src="/cohort-one.jpg"
              alt="Veteran interacting with a horse"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="px-6 py-24 md:py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="font-serif text-4xl mb-8 leading-tight">Serving those who served us.</h3>
              <div className="space-y-6 text-[#1a2e1a]/80 leading-relaxed font-light">
                <p>
                  Horses for Heroes United is a community-led coalition providing a unique <strong>equine partnership experience</strong> at Riley Arena in North Bend, Oregon.
                </p>
                <p>
                  Every Veteran participates in this program <strong>at no cost</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[#1a2e1a] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="font-serif text-4xl mb-8">Connect with us.</h3>
            <p className="mb-4 text-white/60 uppercase tracking-widest text-xs">Email</p>
            <a href="mailto:contact@horsesforheroes.org" className="text-xl">contact@horsesforheroes.org</a>
            <div className="mt-12 pt-12 border-t border-white/10 text-[10px] uppercase tracking-widest text-white/40">
              © 2026 Horses for Heroes United
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
