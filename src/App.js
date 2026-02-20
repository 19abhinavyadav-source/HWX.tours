import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mountain, Leaf, Users, Zap, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    teamSize: '',
    programType: '',
    preferredMonth: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '', company: '', email: '', phone: '', 
        teamSize: '', programType: '', preferredMonth: '', message: ''
      });
    }, 3000);
  };

  // Image Placeholder Component
  const ImagePlaceholder = ({ height = 'h-64', label = 'Image Placeholder' }) => (
    <div className={`${height} bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-400`}>
      <div className="text-center">
        <div className="text-4xl text-gray-500 mb-2">📷</div>
        <p className="text-gray-600 font-medium text-sm">{label}</p>
        <p className="text-gray-500 text-xs mt-1">Image to be added</p>
      </div>
    </div>
  );

  // Navigation
  const Navigation = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-700">HWX</div>
        
        <div className="hidden md:flex gap-8 items-center">
          {[
            { id: 'home', label: 'Home' },
            { id: 'for-corporates', label: 'For Corporates' },
            { id: 'destinations', label: 'Destinations' },
            { id: 'approach', label: 'Approach' },
            { id: 'about', label: 'About' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-2 bg-emerald-700 text-white rounded-lg text-sm font-medium hover:bg-emerald-800"
          >
            Contact
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
          {[
            { id: 'home', label: 'Home' },
            { id: 'for-corporates', label: 'For Corporates' },
            { id: 'destinations', label: 'Destinations' },
            { id: 'approach', label: 'Approach' },
            { id: 'about', label: 'About' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
            className="block w-full px-4 py-2 bg-emerald-700 text-white rounded font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );

  // Home Page
  const HomePage = () => (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-8">
                <span className="text-emerald-300 text-sm font-medium">HIMALAYAN WELLNESS EXCHANGE</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                Corporate Wellness Retreats in the Himalayas
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                HWX connects India's leading companies with vetted yoga, meditation, Ayurveda, and nature retreat centers across Uttarakhand. End-to-end planning for leadership retreats, team offsites, and executive wellness programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2"
                >
                  Plan Your Retreat <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => setCurrentPage('for-corporates')}
                  className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20"
                >
                  Explore Programs
                </button>
              </div>

              <div className="mt-16 flex flex-wrap gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Curated & Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Corporate-Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>End-to-End Support</span>
                </div>
              </div>
            </div>
            <div>
              <ImagePlaceholder height="h-96" label="Himalayan Mountains / Landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What We Deliver</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Solutions designed specifically for corporate wellness and team transformation</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Curated Centers', desc: 'Vetted yoga, Ayurveda & meditation hubs' },
              { icon: Users, title: 'Corporate Planning', desc: 'Custom program design & logistics support' },
              { icon: Mountain, title: 'Deep Expertise', desc: 'Uttarakhand ecosystem knowledge' },
              { icon: Zap, title: 'Quality Assured', desc: 'Government-aligned standards' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all">
                <item.icon className="text-emerald-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Corporate Programs</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Tailored wellness solutions for every business need</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Leadership Retreats', size: '5-15 leaders', duration: '3-5 days', desc: 'Vision work, yoga, mindfulness' },
              { title: 'Team Offsites', size: '25-100 employees', duration: '2-3 days', desc: 'Bonding, wellness, cohesion' },
              { title: 'Executive Sabbaticals', size: '1-5 CXOs', duration: '5-10 days', desc: 'Burnout recovery, renewal' },
              { title: 'Strategy Immersions', size: '8-20 leaders', duration: '2-4 days', desc: 'Off-grid thinking, innovation' }
            ].map((prog, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-3">{prog.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">{prog.size}</p>
                  <p className="text-sm text-emerald-700 font-semibold">{prog.duration}</p>
                </div>
                <p className="text-gray-700 text-sm">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Uttarakhand */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Why Uttarakhand</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                'Authentic yoga capital (Rishikesh & beyond)',
                'Close to Delhi NCR (6-12 hours)',
                '50-70% cost savings vs international retreats',
                'Integrated nature + wellness ecosystem',
                'Government-supported infrastructure',
                'Year-round accessibility'
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
            <div>
              <ImagePlaceholder height="h-96" label="Mountain Landscape / Uttarakhand Scenery" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Team?</h2>
        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">Let's design a custom wellness retreat that builds stronger teams and elevates your organization.</p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-100"
        >
          Plan Your Retreat
        </button>
      </section>
    </div>
  );

  // For Corporates Page
  const ForCorporatesPage = () => (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Corporate Wellness Solutions</h1>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl">Designed for HR leaders, founders, and people teams who value employee wellbeing and executive development.</p>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {['HR & L&D Leaders', 'Founders & CXOs', 'People & Culture Teams'].map((seg, idx) => (
              <div key={idx} className="p-8 bg-white border-2 border-emerald-600 rounded-lg">
                <Users className="text-emerald-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">{seg}</h3>
                <p className="text-gray-600">Tailored programs designed for your specific goals and team dynamics.</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Programs</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Leadership Retreat',
                scope: '5-15 senior leaders',
                duration: '3-5 days',
                highlights: ['Executive yoga', 'Mindfulness workshops', 'Vision & strategy sessions', 'Personalized coaching']
              },
              {
                title: 'Team Offsite',
                scope: '25-100 employees',
                duration: '2-3 days',
                highlights: ['Team bonding activities', 'Wellness workshops', 'Leadership talks', 'Nature immersion']
              },
              {
                title: 'Executive Sabbatical',
                scope: '1-5 CXOs',
                duration: '5-10 days',
                highlights: ['Burnout recovery', 'Personalized wellness plans', 'Executive coaching', 'Strategic thinking']
              },
              {
                title: 'Strategy Immersion',
                scope: '8-20 leaders',
                duration: '2-4 days',
                highlights: ['Off-grid workshops', 'Innovation sprints', 'Leadership alignment', 'Future planning']
              }
            ].map((prog, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{prog.title}</h3>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{prog.scope}</p>
                    <p className="text-sm font-semibold text-emerald-700">{prog.duration}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {prog.highlights.map((h, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span className="text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Makes HWX Different</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Curated & audited wellness centers',
              'Corporate-grade program design',
              'End-to-end planning support',
              'Deep ecosystem expertise',
              'Government-aligned standards',
              'Customizable for any team size'
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Elevate Your Team?</h2>
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800"
        >
          Talk to Our Corporate Team
        </button>
      </section>
    </div>
  );

  // Destinations Page
  const DestinationsPage = () => (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Uttarakhand Wellness Hubs</h1>
          <p className="text-xl text-gray-700 mb-16">Each destination offers unique wellness environments and corporate retreat infrastructure.</p>

          <div className="space-y-8">
            {[
              {
                name: 'Rishikesh',
                tagline: 'Yoga Capital of India',
                description: 'The global epicenter of yoga and wellness. Home to centuries-old ashrams, meditation centers, and Ayurveda hubs. Perfect for deep spiritual work and leadership transformation.',
                programs: ['Leadership Retreats', 'Executive Sabbaticals', 'Wellness Immersions'],
                features: ['Closest to Delhi NCR', '100+ wellness centers', 'Ganga river setting', '5-8 hour drive from Delhi']
              },
              {
                name: 'Mussoorie & Dehradun',
                tagline: 'Hill Station Serenity',
                description: 'Cool climate hill stations perfect for strategy immersions and executive offsites. Stunning views, comfortable stays, and growing corporate retreat infrastructure.',
                programs: ['Team Offsites', 'Strategy Immersions', 'Corporate Retreats'],
                features: ['Hill station elegance', 'Easy accessibility', 'Luxury resorts available', '4-5 hour drive from Delhi']
              },
              {
                name: 'Nainital',
                tagline: 'Lake-Surrounded Tranquility',
                description: 'Picturesque lake town offering balance of nature immersion and comfort. Ideal for team bonding, wellness retreats, and corporate offsites.',
                programs: ['Team Bonding Retreats', 'Wellness Programs', 'Leadership Development'],
                features: ['Lake activities', 'Adventure options', 'Cultural experiences', '6-7 hour drive from Delhi']
              },
              {
                name: 'Chopta & Munsiyari',
                tagline: 'Ultimate Off-Grid Wellness',
                description: 'High-altitude wellness destinations for transformative retreats. Pristine nature, minimal distractions, and authentic Himalayan experiences.',
                programs: ['Executive Sabbaticals', 'Deep Wellness Immersions', 'Strategic Offsites'],
                features: ['Off-grid settings', 'Premium solitude', 'Adventure treks', 'High altitude experience']
              }
            ].map((dest, idx) => (
              <div key={idx} className="p-8 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{dest.name}</h3>
                    <p className="text-emerald-600 font-semibold text-lg mb-4">{dest.tagline}</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{dest.description}</p>
                    
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Ideal For:</h4>
                        <div className="flex flex-wrap gap-2">
                          {dest.programs.map((prog, i) => (
                            <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                              {prog}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {dest.features.map((feat, i) => (
                            <li key={i} className="flex gap-2 text-gray-700 text-sm">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ImagePlaceholder height="h-64" label={`${dest.name} - Destination Image`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing Your Destination?</h2>
        <p className="text-gray-700 text-lg mb-8">Our team knows Uttarakhand intimately. Let's find the perfect location for your retreat.</p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800"
        >
          Schedule a Consultation
        </button>
      </section>
    </div>
  );

  // Approach Page
  const ApproachPage = () => (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Quality Framework</h1>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl">HWX maintains institutional standards across all partnerships. Every center and program meets our rigorous Quality Mark criteria.</p>

          <div className="space-y-8">
            {[
              {
                category: 'Facility Standards',
                points: ['Licensed and registered centers', 'Safety and hygiene compliance', 'Medical support availability', 'Accessibility infrastructure', 'Accommodation quality']
              },
              {
                category: 'Program Quality',
                points: ['Certified yoga instructors', 'Structured curriculum design', 'Corporate customization capability', 'Post-retreat support & materials', 'Digital integration']
              },
              {
                category: 'Environmental Compliance',
                points: ['Water & waste management', 'Carbon footprint monitoring', 'Local community partnerships', 'Forest conservation alignment', 'Eco-tourism certification']
              },
              {
                category: 'Community Benefit',
                points: ['Local employment partnerships', 'Fair pricing & transparency', 'Skill development programs', 'Community impact reporting', 'Profit-sharing with centers']
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-sm font-bold">✓</div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-emerald-700 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">The HWX Quality Mark</h3>
            <p className="text-emerald-100 leading-relaxed">
              Every partner center in our network has been audited and certified against our institutional framework. This means corporate clients can trust that their teams will experience world-class wellness infrastructure, expert instruction, and transformative programming.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About HWX</h1>
          <p className="text-xl text-gray-700 mb-16">We bridge the gap between India's corporate leaders and Uttarakhand's world-class wellness ecosystem.</p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                name: 'Abhinav Yadav',
                role: 'Founder & CEO',
                education: 'IIM Lucknow, NIT Raipur',
                background: '8.5+ years in sales, corporate strategy, and B2B SaaS. Deep expertise in enterprise sales cycles and building scalable corporate partnerships.'
              },
              {
                name: 'Aayush Paul',
                role: 'Co-Founder & CTO',
                education: 'University of Queensland, NIT Raipur',
                background: '8.5+ years in technology, marketplace platforms, and platform architecture. Specialized in scaling B2B supply networks and digital ecosystems.'
              }
            ].map((founder, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-lg border border-gray-200">
                <div className="mb-6">
                  <ImagePlaceholder height="h-48" label={`${founder.name} - Founder Portrait`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-emerald-700 font-semibold mb-2">{founder.role}</p>
                <p className="text-gray-600 text-sm mb-4">{founder.education}</p>
                <p className="text-gray-700 leading-relaxed">{founder.background}</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-emerald-50 rounded-lg border border-emerald-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Himalayan Wellness Exchange exists to elevate how India's leading organizations approach team wellbeing and executive development. We believe that transformative retreats in nature, combined with authentic wellness practices, build resilient leaders and cohesive teams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By curating the finest wellness centers and designing rigorous corporate programs, HWX removes friction from the retreat planning process—so companies can focus on what matters: creating space for their teams to reconnect, reset, and realign.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Plan Your Corporate Retreat</h1>
          <p className="text-xl text-gray-700 text-center mb-16">Our corporate team will reach out within 24 hours to discuss your goals and design the perfect retreat.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, label: 'Email', value: '19.abhinavyadav@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91-7898289395' },
              { icon: MapPin, label: 'Location', value: 'Uttarakhand, India' }
            ].map((contact, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg">
                <contact.icon className="text-emerald-600 mx-auto mb-3" size={32} />
                <p className="text-gray-600 font-medium mb-1">{contact.label}</p>
                <p className="text-gray-900 font-semibold">{contact.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            {formSubmitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-700 text-lg">We've received your inquiry. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Team Size *</label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none bg-white"
                    >
                      <option value="">Select team size</option>
                      <option value="5-15">5-15 people</option>
                      <option value="15-50">15-50 people</option>
                      <option value="50-100">50-100 people</option>
                      <option value="100+">100+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Program Type *</label>
                    <select
                      name="programType"
                      value={formData.programType}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none bg-white"
                    >
                      <option value="">Select program type</option>
                      <option value="leadership-retreat">Leadership Retreat</option>
                      <option value="team-offsite">Team Offsite</option>
                      <option value="executive-sabbatical">Executive Sabbatical</option>
                      <option value="strategy-immersion">Strategy Immersion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Month *</label>
                  <input
                    type="month"
                    name="preferredMonth"
                    value={formData.preferredMonth}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                    placeholder="Tell us about your goals, team, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2"
                >
                  Submit Inquiry <ChevronRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'for-corporates' && <ForCorporatesPage />}
      {currentPage === 'destinations' && <DestinationsPage />}
      {currentPage === 'approach' && <ApproachPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">HWX</h3>
              <p className="text-sm">Himalayan Wellness Exchange</p>
              <p className="text-sm">Corporate wellness retreats in Uttarakhand, India</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigate</h4>
              <ul className="space-y-2 text-sm">
                {['home', 'for-corporates', 'destinations', 'approach', 'about'].map((item) => (
                  <li key={item}><button onClick={() => setCurrentPage(item)} className="hover:text-emerald-400 transition-colors">{item === 'home' ? 'Home' : item.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: 19.abhinavyadav@gmail.com</li>
                <li>Phone: +91-7898289395</li>
                <li>Uttarakhand, India</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ready to Connect?</h4>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-4 py-2 bg-emerald-600 text-white rounded text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 Himalayan Wellness Exchange. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <button
        onClick={() => setCurrentPage('contact')}
        className="fixed bottom-8 right-8 px-6 py-4 bg-emerald-600 text-white rounded-full shadow-xl hover:bg-emerald-700 transition-all z-40 hover:scale-110 transform font-semibold text-sm flex items-center gap-2"
      >
        <Mail size={20} />
        <span className="hidden sm:inline">Contact</span>
      </button>
    </div>
  );
};

export default App;
