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

        {/* The Cohort Visual Anchor */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="relative aspect-[21/9] bg-[#1a2e1a]/10 rounded-2xl overflow-hidden border border-[#1a2e1a]/10 shadow-2xl">
            <img 
              src="/cohort-one.jpg" 
              alt="First cohort of Veterans with the Coos County Mounted Sheriff's Posse" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-sm italic opacity-60">The inaugural 2025 cohort alongside the Coos County Mounted Sheriff’s Posse.</p>
        </section>

        {/* ... Sections (About, Approach, Program) remain the same ... */}

        {/* Community & Partners */}
        <section id="partners" className="py-24 px-6 bg-[#FDFCF8]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8 italic">A Community Coalition</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-16">
              We operate through radical collaboration. Strengthened by the <strong>North Bend VA</strong> and hosted through our vital partnership with the <strong>Coos County Mounted Sheriff’s Posse</strong>, we are built by the community, for our heroes.
            </p>
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
        <footer id="contact" className="py-20 px-6 bg-[#FDFCF8]">
          <div className="max-w-7xl mx-auto border-t border-[#1a2e1a]/20 pt-16 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h3 className="font-serif text-3xl mb-4 uppercase">Horses for Heroes United</h3>
              <p className="max-w-sm opacity-70">Improving the quality of life for Veterans across Coos and Western Douglas County, Oregon.</p>
            </div>
            <div className="space-y-4">
              <p className="font-bold uppercase tracking-widest text-xs">Engagement</p>
              <a href="#volunteer" className="block opacity-80 hover:underline">Volunteer Opportunities</a>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-2">Regional Hub</p>
              <p className="opacity-80 italic underline decoration-1 underline-offset-4">North Bend, Oregon</p>
            </div>
          </div>
          <p className="text-center text-[10px] mt-20 uppercase tracking-[0.2em] opacity-30">
            © 2026 HORSES FOR HEROES UNITED. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </main>
    </div>
  );
}
