import React, { useState } from 'react';
import { BookOpen, Shield, Heart, Calendar, MapPin, Users, Send, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    { name: "Janice", text: "This experience has given me something I didn’t know I was missing—and now, something to look forward to. I can’t wait to return next year as a peer support, to walk beside others as they discover what this journey can hold." },
    { name: "Linda", text: "Being able to participate in Horses For Heroes has brought back other memories. I’ve been able to watch other people fall in love with that glorious four-legged creature, the horse. Riding cross-country might have ruined my knees, but being able to share this experience with my fellow veterans has helped seal up the cracks in my heart. I remember what it was like to look forward to a new day, and now I can stop freezing. I can make plans for the rest of my life." },
    { name: "Michelle", text: "Participation in the Coos County Mounted Sheriff Posse, Horses of Heroes program has been transformative, providing me with a sense of purpose and healing through working with horses and other helpful heroes striving to make a positive difference." },
    { name: "Tiffany", text: "The program helped me regain confidence in riding and reconnect socially. I’ve had tough critics in the past, and it made moving forward feel impossible. But the camaraderie and time spent with other veterans helped me feel less isolated. I felt part of something again." },
    { name: "Teresa", text: "The Horses for Heroes program gave me an opportunity to not only be around the horses but to also meet with other veterans and their families who were also interested in learning to care for horses and riding. Would not trade my experience and I hope to continue with the program as a volunteer." },
    { name: "Tony", text: "The horses make me feel safe. The trainers make me feel safe. I knew it was a safe program and a safe place. This time was a whole lot easier. Through the whole 12 weeks I felt the nightmares and the fear start to go away. I loved the horses just as much as I loved the people. I can't wait to get back to the horses next time!" },
    { name: "Chris", text: "Everyone came in with different comfort levels and different knowledge, and I was able to engage at my own pace with encouragement from the Posse and the other veterans. The Posse members always met us where we were and took the time to answer questions." }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div id="top" className="min-h-screen bg-[#FDFCF8] font-sans text-[#1a2e1a]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#1a2e1a] text-white p-4 rounded-md z-[100]">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full bg-[#FDFCF8]/90 backdrop-blur-sm border-b border-[#1a2e1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="focus:outline-none focus:ring-2 focus:ring-[#1a2e1a] rounded">
            <h1 className="font-serif text-xl font-bold tracking-tight uppercase">Horses for Heroes United</h1>
          </a>
          <nav aria-label="Main Navigation" className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="hover:opacity-60 focus:ring-2 focus:ring-[#1a2e1a] rounded px-1">About Us</a>
            <a href="#approach" className="hover:opacity-60 focus:ring-2 focus:ring-[#1a2e1a] rounded px-1">Our Approach</a>
            <a href="#program" className="hover:opacity-60 focus:ring-2 focus:ring-[#1a2e1a] rounded px-1">Program</a>
            <a href="#volunteer" className="hover:opacity-60 focus:ring-2 focus:ring-[#1a2e1a] rounded px-1">Volunteer</a>
            <a href="#contact" className="hover:opacity-60 border-b border-[#1a2e1a] focus:ring-2 focus:ring-[#1a2e1a] rounded px-1">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative pt-32 pb-8 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-[#1a2e1a]">
              Healing Through <br />
              <span className="italic" aria-hidden="true">Intentional Partnership.</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 text-[#1a2e1a]/90 max-w-3xl mx-auto leading-relaxed">
              A community-based coalition improving the emotional well-being and quality of life for Veterans across 
              <strong> Coos County</strong> and <strong>Western Douglas County, Oregon</strong>.
            </p>
          </div>
        </section>

        {/* Branch Logos */}
        <section className="pb-16 px-6" aria-label="Military Service Branches Supported">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-90">
            <img src="/army.jpeg" alt="U.S. Army emblem" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/marines.jpeg" alt="U.S. Marine Corps emblem" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/navy.jpeg" alt="U.S. Navy emblem" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/airforce.jpeg" alt="U.S. Air Force emblem" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/coastguard.jpeg" alt="U.S. Coast Guard emblem" className="h-10 md:h-14 w-auto object-contain" />
            <img src="/spaceforce.jpeg" alt="U.S. Space Force emblem" className="h-10 md:h-14 w-auto object-contain" />
          </div>
        </section>

        {/* Cohort Image */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <figure className="relative aspect-[21/9] bg-[#1a2e1a]/10 rounded-2xl overflow-hidden border border-[#1a2e1a]/10 shadow-2xl">
            <img src="/cohort-one.jpg" alt="The inaugural 2025 cohort of Veterans and Sheriff's Posse members with horses at Riley Arena." className="w-full h-full object-cover" />
          </figure>
          <figcaption className="mt-4 text-center text-sm italic text-[#1a2e1a]/70">The inaugural 2025 cohort alongside the Coos County Mounted Sheriff’s Posse.</figcaption>
        </section>

        {/* Mission Statement Section: Side-by-Side Flag Accent */}
        <section id="about" className="py-24 px-6 bg-[#1a2e1a] text-[#FDFCF8]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            {/* Flag Image Column - Matches us-flag.jpg in your public folder */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white/5">
                <img 
                  src="/us-flag.jpg" 
                  alt="U.S. Flag waving against a bright blue sky" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/60 to-transparent"></div>
              </div>
            </div>

            {/* Mission Text Column */}
            <div className="md:col-span-7 order-1 md:order-2 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl uppercase tracking-[0.3em] opacity-60">Our Mission</h3>
                <p className="text-3xl md:text-5xl font-serif leading-tight italic">
                  "To improve the emotional well-being and quality of life for Veterans through intentional equine partnerships and community-based coalitions."
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/20">
                <p className="text-xl md:text-2xl font-light tracking-wide">
                  We are <span className="font-bold border-b-2 border-white/40 pb-1">built by the community, for our heroes.</span>
                </p>
              </div>

              <p className="text-lg opacity-80 leading-relaxed">
                We provide a safe environment to reconnect with oneself and a community that understands the journey. We exist because too many Veterans continue to carry the invisible impacts of service.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section id="approach" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#1a2e1a]/5 p-12 rounded-2xl border border-[#1a2e1a]/10">
              <h3 className="font-serif text-4xl mb-6 italic">Our Approach</h3>
              <p className="text-lg leading-relaxed mb-6 text-[#1a2e1a]">
                Our program is grounded in relationship-based interactions. In the quiet of the arena, a horse turning toward a Veteran with calm curiosity becomes the starting point for meaningful change.
              </p>
              <p className="text-sm border-t border-[#1a2e1a]/10 pt-6 opacity-70 italic text-[#1a2e1a]">
                Note: We do not offer clinical therapy. We provide a complementary wellness experience that supports Veterans in ways traditional services may not always reach.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Shield className="shrink-0 text-[#1a2e1a]" aria-hidden="true" />
                <div>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">Safety & Dignity</h4>
                  <p className="opacity-70">Guided by trained facilitators who prioritize individualized support.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Heart className="shrink-0 text-[#1a2e1a]" aria-hidden="true" />
                <div>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">Non-Verbal Connection</h4>
                  <p className="opacity-70">Helping Veterans regulate stress and experience a renewed sense of confidence.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Users className="shrink-0 text-[#1a2e1a]" aria-hidden="true" />
                <div>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">Community Connection</h4>
                  <p className="opacity-70">Veterans report a greater sense of belonging and improved emotional well-being.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-24 px-6 bg-[#1a2e1a]/5 border-y border-[#1a2e1a]/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl mb-6">The Equine Experience</h2>
              <p className="uppercase tracking-widest text-xs font-bold opacity-60">A Free 8-Week Wellness Initiative</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-[#1a2e1a]/10 rounded-xl shadow-sm">
                <Calendar className="mb-4 text-[#1a2e1a]" aria-hidden="true" />
                <h4 className="font-serif text-2xl mb-4">Summer Schedule</h4>
                <p className="opacity-80">Our primary program runs annually from July through August in North Bend, Oregon.</p>
              </div>
              <div className="p-8 bg-white border border-[#1a2e1a]/10 rounded-xl shadow-sm">
                <MapPin className="mb-4 text-[#1a2e1a]" aria-hidden="true" />
                <h4 className="font-serif text-2xl mb-4">Regional Reach</h4>
                <p className="opacity-80">Serving the Veteran communities of Coos County and Western Douglas County, Oregon.</p>
              </div>
              <a href="https://andrewdbicebooks.com/books/horses-for-heroes-united-andrew-d-bice/B0GK973S1Z" target="_blank" rel="noopener noreferrer" className="p-8 bg-[#1a2e1a] text-[#FDFCF8] rounded-xl shadow-xl hover:scale-[1.02] transition-transform group focus:ring-4 focus:ring-[#1a2e1a]/30">
                <BookOpen className="mb-4 group-hover:text-white/80 transition-colors" aria-hidden="true" />
                <h4 className="font-serif text-2xl mb-4 text-white">The Publication</h4>
                <p className="text-sm opacity-80 leading-relaxed">100% of all proceeds fund our wellness sessions, ensuring Veterans participate at no cost.</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest border-b border-white/30 inline-block pb-1">Read the Story</p>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="py-24 px-6 bg-white overflow-hidden" aria-labelledby="testimonial-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="testimonial-heading" className="font-serif text-4xl mb-4 italic">Beyond the Arena</h2>
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-[#1a2e1a]/60">Reflections from the 2025 Inaugural Cohort</p>
            </div>
            <div className="relative bg-[#FDFCF8] border border-[#1a2e1a]/10 rounded-3xl p-8 md:p-16 shadow-sm min-h-[420px] flex flex-col justify-center" role="region" aria-roledescription="carousel" aria-label="Veteran Testimonials">
              <Quote className="absolute top-8 left-8 opacity-5 text-[#1a2e1a]" size={80} aria-hidden="true" />
              <div className="relative z-10 text-center px-4 md:px-12 transition-all duration-500" aria-live="polite" aria-atomic="true">
                <article>
                  <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 italic text-[#1a2e1a]">"{testimonials[currentSlide].text}"</p>
                  <div className="h-px w-12 bg-[#1a2e1a]/20 mx-auto mb-6" aria-hidden="true"></div>
                  <footer className="font-bold uppercase tracking-widest text-xs text-[#1a2e1a]">— {testimonials[currentSlide].name}, Cohort 2025</footer>
                </article>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button onClick={prevSlide} aria-label="Previous Testimonial" className="p-4 hover:bg-[#1a2e1a]/5 transition-colors focus:ring-2 focus:ring-[#1a2e1a] rounded-full text-[#1a2e1a]">
                  <ChevronLeft size={32} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button onClick={nextSlide} aria-label="Next Testimonial" className="p-4 hover:bg-[#1a2e1a]/5 transition-colors focus:ring-2 focus:ring-[#1a2e1a] rounded-full text-[#1a2e1a]">
                  <ChevronRight size={32} />
                </button>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2" role="tablist" aria-label="Slide selection">
                {testimonials.map((_, idx) => (
                  <button key={idx} role="tab" aria-selected={currentSlide === idx} aria-label={`Go to testimonial ${idx + 1}`} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-[#1a2e1a] w-6' : 'bg-[#1a2e1a]/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-24 px-6 bg-[#FDFCF8] border-t border-[#1a2e1a]/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-4xl mb-6 italic text-[#1a2e1a]">Join the Coalition</h2>
                <p className="text-lg opacity-80 mb-8 font-serif italic text-[#1a2e1a]">"Help us build the next cohort."</p>
                <p className="text-[#1a2e1a]/80 mb-6">We are looking for dedicated individuals to support our sessions at <strong>Riley Arena</strong>. While all help is welcome, we prioritize:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1a2e1a] rounded-full" aria-hidden="true" /><span><strong>Veterans</strong> (Previous participants encouraged)</span></li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1a2e1a] rounded-full" aria-hidden="true" /><span>Individuals with a <strong>program-suitable horse</strong> (Subject to Posse evaluation)</span></li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1a2e1a] rounded-full" aria-hidden="true" /><span>Individuals with <strong>horse handling experience</strong></span></li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1a2e1a] rounded-full" aria-hidden="true" /><span><strong>Community members</strong> for logistics and outreach</span></li>
                </ul>
              </div>
              <form action="https://formspree.io/f/mwvnnbro" method="POST" className="space-y-4 bg-white p-8 rounded-xl border border-[#1a2e1a]/10 shadow-lg">
                <div><label htmlFor="full-name" className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-[#1a2e1a]">Full Name</label><input id="full-name" type="text" name="name" required className="w-full bg-[#FDFCF8] border border-[#1a2e1a]/10 p-3 rounded focus:ring-2 focus:ring-[#1a2e1a] text-[#1a2e1a]" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label htmlFor="email-address" className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-[#1a2e1a]">Email</label><input id="email-address" type="email" name="email" required className="w-full bg-[#FDFCF8] border border-[#1a2e1a]/10 p-3 rounded focus:ring-2 focus:ring-[#1a2e1a] text-[#1a2e1a]" /></div>
                  <div><label htmlFor="phone-number" className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-[#1a2e1a]">Phone</label><input id="phone-number" type="tel" name="phone" required className="w-full bg-[#FDFCF8] border border-[#1a2e1a]/10 p-3 rounded focus:ring-2 focus:ring-[#1a2e1a] text-[#1a2e1a]" /></div>
                </div>
                <div><label htmlFor="vet-status" className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-[#1a2e1a]">Veteran Status</label><select id="vet-status" name="veteran_status" className="w-full bg-[#FDFCF8] border border-[#1a2e1a]/10 p-3 rounded focus:ring-2 focus:ring-[#1a2e1a] text-[#1a2e1a]"><option value="no">Non-Veteran</option><option value="yes">Veteran</option><option value="previous-cohort">Previous Cohort Participant</option></select></div>
                <div><label htmlFor="exp-notes" className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-[#1a2e1a]">Experience</label><textarea id="exp-notes" name="experience" placeholder="How can you help us build?" className="w-full bg-[#FDFCF8] border border-[#1a2e1a]/10 p-3 rounded h-24 focus:ring-2 focus:ring-[#1a2e1a] text-[#1a2e1a]"></textarea></div>
                <button type="submit" className="w-full bg-[#1a2e1a] text-white py-4 rounded font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus:ring-4 focus:ring-[#1a2e1a]/40"><Send size={16} aria-hidden="true" /> Submit Application</button>
              </form>
            </div>
          </div>
        </section>

        {/* Community & Partners */}
        <section id="partners" className="py-24 px-6 bg-[#FDFCF8] border-t border-[#1a2e1a]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8 italic text-[#1a2e1a]">A Community Coalition</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-16 text-[#1a2e1a]/90 font-light text-center">
              We operate through radical collaboration. Strengthened by the <strong>VA</strong> and hosted through our vital partnership with the <strong>Coos County Mounted Sheriff’s Posse</strong>, we are built by the community, for our heroes.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="flex flex-col items-center gap-4">
                <img src="/posse.jpeg" alt="Coos County Mounted Sheriff's Posse logo" className="h-32 md:h-44 w-auto object-contain" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 text-[#1a2e1a]">Operational Host</span>
              </div>
              <div className="h-16 w-px bg-[#1a2e1a]/10 hidden md:block" aria-hidden="true"></div>
              <div className="flex flex-col items-center gap-4">
                <img src="/valogo.svg" alt="U.S. Department of Veterans Affairs logo" className="h-32 md:h-44 w-auto object-contain" />
                <div className="flex flex-col items-center max-w-[320px]">
                  <span className="text-sm font-serif font-bold italic text-[#1a2e1a] mb-1 leading-tight text-center">North Bend VA Suicide Prevention Community Engagement Coordinator, Roseburg VA</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 text-[#1a2e1a]">Community Partner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-20 px-6 border-t border-[#1a2e1a]/10 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-4 uppercase tracking-tighter text-[#1a2e1a]">Horses for Heroes United</h3>
              <p className="max-w-xs text-[#1a2e1a]/60 text-sm italic">"Built by the community, for our heroes."</p>
            </div>
            <div><p className="font-bold uppercase tracking-widest text-[10px] mb-4 opacity-50 text-[#1a2e1a]">Location</p><p className="text-[#1a2e1a]/80 text-sm font-serif">North Bend, Oregon</p></div>
          </div>
          <div className="max-w-7xl mx-auto text-center mt-16 pt-8 border-t border-[#1a2e1a]/5 text-[#1a2e1a]">
             <p className="text-[10px] uppercase tracking-widest opacity-30 font-bold">© 2026 HORSES FOR HEROES UNITED. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
