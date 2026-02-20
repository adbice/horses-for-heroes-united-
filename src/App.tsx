import React from 'react';
import { BookOpen, Shield, Heart, Calendar, MapPin, Users, Send } from 'lucide-react';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#FDFCF8] font-sans text-[#1a2e1a]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="hover:opacity-70 transition-opacity cursor-pointer">
            <h1 className="font-serif text-xl font-bold tracking-tight uppercase">Horses for Heroes United</h1>
          </a>
          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="#approach" className="hover:opacity-60 transition-opacity">Our Approach</a>
            <a href="#program" className="hover:opacity-60 transition-opacity">Program</a>
            <a href="#volunteer" className="hover:opacity-60 transition-opacity">Volunteer</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity border-b border-[#1a2e1a]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-8 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Healing Through <br />
              <span className="italic">Intentional Partnership.</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 text-[#1a2e1a]/80 max-w-3xl mx-auto leading-relaxed">
              A community-based coalition improving the emotional well-being and quality of life for Veterans across 
              <strong> Coos County</strong> and <strong>Western Douglas County, Oregon</strong>.
            </p>
          </div>
        </section>

        {/* Military Branch Logos */}
        <section className="pb-16 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-90">
            <img src="/army.jpeg" alt="U.S. Army" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/marines.jpeg" alt="U.S. Marine Corps" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/navy.jpeg" alt="U.S. Navy" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/airforce.jpeg" alt="U.S. Air Force" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/coastguard.jpeg" alt="U.S. Coast Guard" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/spaceforce.jpeg" alt="U.S. Space Force" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </section>

        {/* Cohort Image */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="relative aspect-[21/9] bg-[#1a2e1a]/10 rounded-2xl overflow-hidden border border-[#1a2e1a]/10 shadow-2xl">
            <img 
              src="/cohort-one.jpg" 
              alt="First cohort of Veterans" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-sm italic opacity-60">The inaugural 2025 cohort alongside the Coos County Mounted Sheriff’s Posse.</p>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 px-6 bg-white/50 border-y border-[#1a2e1a]/5">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h3 className="font-serif text-4xl italic">About Us</h3>
            <p className="text-xl leading-relaxed opacity-90">
              We provide a safe, supportive environment where Veterans can reconnect with themselves and a community that understands their journey. Every Veteran participates at <strong>no cost</strong>.
            </p>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 italic">Join the Coalition</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#1a2e1a] rounded-full" />
                    <span><strong>Veterans</strong> (Previous Cohort participants preferred)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#1a2e1a] rounded-full" />
                    <span>Individuals with a <strong>horse suitable for the program</strong> (Subject to evaluation by the Posse)</span>
                  </li>
                </ul>
              </div>

              {/* Formspree Form */}
              <form action="https://formspree.io/f/mwvnnbro" method="POST" className="space-y-4 bg-[#FDFCF8] p-8 rounded-xl border border-[#1a2e1a]/10 shadow-sm">
                <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded" />
                  <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border rounded" />
                </div>
                <select name="veteran_status" className="w-full p-3 border rounded">
                  <option value="no">Non-Veteran</option>
                  <option value="yes">Veteran</option>
                  <option value="previous-cohort">Previous Cohort Participant</option>
                </select>
                <textarea name="experience" placeholder="Describe your horse handling experience..." className="w-full p-3 border rounded h-24"></textarea>
                <button type="submit" className="w-full bg-[#1a2e1a] text-white py-4 rounded font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Community & Partners */}
        <section id="partners" className="py-24 px-6 bg-[#FDFCF8]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8 italic">A Community Coalition</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="flex flex-col items-center gap-4">
                <img src="/posse.jpeg" alt="Coos County Mounted Sheriff's Posse" className="h-32 md:h-44 w-auto object-contain" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Operational Host</span>
              </div>
              <div className="h-16 w-px bg-[#1a2e1a]/10 hidden md:block"></div>
              <div className="flex flex-col items-center gap-4">
                <img src="/valogo.svg" alt="North Bend VA" className="h-32 md:h-44 w-auto object-contain" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">Community Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-20 px-6 border-t border-[#1a2e1a]/10">
          <div className="max-w-7xl mx-auto text-center">
             <p className="text-[10px] uppercase tracking-widest opacity-30">© 2026 HORSES FOR HEROES UNITED. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
