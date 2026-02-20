import React from 'react';
import { BookOpen, Shield, Heart, Calendar, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1a2e1a]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="font-serif text-xl font-bold tracking-tight uppercase">Horses for Heroes United</h1>
          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#science-soul" className="hover:opacity-60 transition-opacity">Science & Soul</a>
            <a href="#program" className="hover:opacity-60 transition-opacity">Program</a>
            <a href="#partners" className="hover:opacity-60 transition-opacity">Partners</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity border-b border-[#1a2e1a]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Healing Through <br />
              <span className="italic">Intentional Partnership.</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 text-[#1a2e1a]/80 max-w-2xl mx-auto leading-relaxed">
              A specialized wellness initiative for Veterans in North Bend, Oregon, 
              pairing human courage with equine connection.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#program" className="bg-[#1a2e1a] text-[#FDFCF8] px-8 py-4 rounded-full font-medium hover:bg-[#2a452a] transition-all shadow-md">
                View Program
              </a>
            </div>
          </div>
        </section>

        {/* Science & Soul Section */}
        <section id="science-soul" className="py-24 px-6 border-t border-[#1a2e1a]/5 bg-white/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-4xl italic">The Science</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Equine-assisted wellness is rooted in biological research. By interacting with horses, Veterans can regulate their nervous systems, lower cortisol levels, and practice emotional grounding in real-time.
              </p>
              <div className="h-px w-24 bg-[#1a2e1a]/20"></div>
              <h3 className="font-serif text-4xl italic">The Soul</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Horses are masters of non-verbal communication. In this partnership, Veterans find a mirror for their own strength and a safe space to rebuild trust and connection through mutual respect.
              </p>
            </div>
            <div className="bg-[#1a2e1a]/5 aspect-square rounded-2xl flex items-center justify-center border border-[#1a2e1a]/10">
               <Heart size={80} strokeWidth={1} className="text-[#1a2e1a]/20" />
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="program" className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="font-serif text-5xl mb-6">The Equine Experience</h2>
            <p className="uppercase tracking-widest text-sm font-bold opacity-60">A Free 8-Week Wellness Initiative</p>
          </div>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#1a2e1a]/10 rounded-xl space-y-4">
              <Calendar className="mb-4" />
              <h4 className="font-serif text-2xl">Summer Schedule</h4>
              <p className="opacity-80">Our primary program runs annually from July through August, offering a focused window for connection and growth.</p>
            </div>
            <div className="p-8 border border-[#1a2e1a]/10 rounded-xl space-y-4">
              <MapPin className="mb-4" />
              <h4 className="font-serif text-2xl">North Bend, OR</h4>
              <p className="opacity-80">Located in the heart of our community, we utilize local facilities to provide an accessible haven for our Veterans.</p>
            </div>
            <div className="p-8 bg-[#1a2e1a] text-[#FDFCF8] rounded-xl space-y-4 shadow-xl">
              <BookOpen className="mb-4" />
              <h4 className="font-serif text-2xl text-white">The Publication</h4>
              <p className="opacity-90">Explore *Healing Through Equine Connection*, our recently published book documenting participant journeys and the impact of the coalition.</p>
            </div>
          </div>
        </section>

        {/* Community & Partners */}
        <section id="partners" className="py-24 px-6 bg-[#1a2e1a]/5">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl italic">A Community Coalition</h2>
            <p className="text-xl leading-relaxed">
              We operate through radical collaboration. From planning meetings at the <strong>North Bend VA</strong> to our vital partnership with the <strong>Coos County Mounted Sheriff’s Posse</strong>, we are built by the community, for our heroes.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8 opacity-50 grayscale">
               <span className="font-serif text-xl tracking-tighter">COOS COUNTY SHERIFF'S POSSE</span>
               <span className="font-serif text-xl tracking-tighter">NORTH BEND VA</span>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="py-20 px-6 bg-[#FDFCF8]">
          <div className="max-w-7xl mx-auto border-t border-[#1a2e1a]/20 pt-16 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h3 className="font-serif text-3xl mb-4">Horses for Heroes United</h3>
              <p className="max-w-sm opacity-70">Dedicated to the healing of those who have served through the wisdom of the horse.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold uppercase tracking-widest text-xs">Engagement</p>
              <p className="opacity-80 underline underline-offset-4">Join Alumni Meetings</p>
              <p className="opacity-80 underline underline-offset-4">Volunteer Opportunities</p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-xs mb-2">Location</p>
              <p className="opacity-80 italic">North Bend, Oregon</p>
            </div>
          </div>
          <p className="text-center text-[10px] mt-20 uppercase tracking-[0.2em] opacity-30">
            © 2026 Horses for Heroes United. All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
