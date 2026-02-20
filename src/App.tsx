import React from 'react';
import { BookOpen, Shield, Heart, Calendar, MapPin, Users } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#1a2e1a]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="font-serif text-xl font-bold tracking-tight uppercase">Horses for Heroes United</h1>
          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="#approach" className="hover:opacity-60 transition-opacity">Our Approach</a>
            <a href="#program" className="hover:opacity-60 transition-opacity">Program</a>
            <a href="#partners" className="hover:opacity-60 transition-opacity">Partners</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity border-b border-[#1a2e1a]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6 text-center">
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

        {/* The Cohort Visual Anchor */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="relative aspect-[21/9] bg-[#1a2e1a]/10 rounded-2xl overflow-hidden border border-[#1a2e1a]/10 shadow-2xl">
            <img 
              src="/cohort-one.jpg" 
              alt="First cohort of Veterans with the Coos County Mounted Sheriff's Posse" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-sm italic opacity-60">The inaugural cohort alongside the Coos County Mounted Sheriff’s Posse.</p>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 px-6 bg-white/50 border-y border-[#1a2e1a]/5">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h3 className="font-serif text-4xl italic">About Us</h3>
            <p className="text-xl leading-relaxed opacity-90">
              We exist because too many Veterans continue to carry the invisible impacts of service—chronic stress, isolation, and disrupted sleep. We provide a safe, supportive environment where Veterans can reconnect with themselves and a community that understands their journey.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-left pt-8">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-sm text-[#1a2e1a]/60">Our Commitment</h4>
                <p>Every Veteran participates at <strong>no cost</strong>. We believe access to healing should never depend on financial circumstances.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-sm text-[#1a2e1a]/60">Our Vision</h4>
                <p>A future where every Veteran has a welcoming space to experience connection, purpose, and hope.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#1a2e1a] text-[#FDFCF8] p-12 rounded-2xl shadow-xl">
              <h3 className="font-serif text-4xl mb-6">Our Approach</h3>
              <p className="text-lg leading-relaxed mb-6">
                Our program is grounded in relationship-based interactions. In the quiet of the arena, a horse turning toward a Veteran with calm curiosity becomes the starting point for meaningful change.
              </p>
              <p className="text-sm border-t border-white/20 pt-6 opacity-80 italic">
                Note: We do not offer clinical therapy. We provide a complementary wellness experience that supports Veterans in ways traditional services may not always reach.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Shield className="shrink-0 text-[#1a2e1a]" />
                <div>
                  <h4 className="font-bold mb-2">Safety & Dignity</h4>
                  <p className="opacity-70">Guided by trained facilitators who prioritize individualized support.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Heart className="shrink-0 text-[#1a2e1a]" />
                <div>
                  <h4 className="font-bold mb-2">Non-Verbal Connection</h4>
                  <p className="opacity-70">Helping Veterans regulate stress and experience a renewed sense of confidence.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Users className="shrink-0 text-[#1a2e1a]" />
                <div>
                  <h4 className="font-bold mb-2">Community Connection</h4>
                  <p className="opacity-70">Veterans report a greater sense of belonging and improved emotional well-being.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program & Book */}
        <section id="program" className="py-24 px-6 bg-[#1a2e1a]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl mb-6">The Equine Experience</h2>
              <p className="uppercase tracking-widest text-sm font-bold opacity-60">A Free 8-Week Wellness Initiative</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-[#1a2e1a]/10 rounded-xl">
                <Calendar className="mb-4 text-[#1a2e1a]" />
                <h4 className="font-serif text-2xl mb-4">Summer Schedule</h4>
                <p className="opacity-80">Our primary program runs annually from July through August in North Bend, Oregon.</p>
              </div>
              <div className="p-8 bg-white border border-[#1a2e1a]/10 rounded-xl">
                <MapPin className="mb-4 text-[#1a2e1a]" />
                <h4 className="font-serif text-2xl mb-4">Regional Reach</h4>
                <p className="opacity-80">Serving the Veteran communities of Coos County and Western Douglas County, Oregon.</p>
              </div>
              
              {/* Clickable Publication Card */}
              <a 
                href="https://andrewdbicebooks.com/books/horses-for-heroes-united-andrew-d-bice/B0GK973S1Z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-8 bg-[#1a2e1a] text-[#FDFCF8] rounded-xl shadow-xl hover:scale-[1.02] transition-transform group cursor-pointer"
              >
                <BookOpen className="mb-4 group-hover:text-white/80 transition-colors" />
                <h4 className="font-serif text-2xl mb-4">The Publication</h4>
                <p className="opacity-90 italic mb-4">"Healing Through Equine Connection"</p>
                <p className="text-sm opacity-80 leading-relaxed">
                  A journey into the heart of the horse-human bond. 
                  <strong> 100% of all proceeds </strong> fund our wellness sessions, 
                  ensuring Veterans participate at no cost.
                </p>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest border-b border-white/30 inline-block pb-1">Read the Story</p>
              </a>
            </div>
          </div>
        </section>

        {/* Community & Partners */}
        <section id="partners" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl italic">A Community Coalition</h2>
            <p className="text-xl leading-relaxed">
              We operate through radical collaboration. Strengthened by the <strong>North Bend VA</strong> and hosted through our vital partnership with the <strong>Coos County Mounted Sheriff’s Posse</strong>, we are built by the community, for our heroes.
            </p>
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
              <p className="opacity-80">Volunteer Opportunities (Coming Soon)</p>
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
