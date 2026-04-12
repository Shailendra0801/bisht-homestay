import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Wifi, ParkingSquare, Utensils, Mountain, Leaf, Droplets, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────────
   CSS injected once – keeps JSX clean
───────────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  :root {
    --brand:       #AE9364;
    --brand-dark:  #8B7355;
    --brand-light: #D8C8A8;
    --cream:       #FAF7F2;
    --stone:       #F0EDE6;
    --ink:         #2B1E1A;
    --ink-soft:    #4A3C36;
    --muted:       #8A7D74;
    --border:      rgba(174,147,100,0.18);
    --serif:       'Cormorant Garamond', Georgia, serif;
    --sans:        'Jost', sans-serif;
  }

  .home-page * { box-sizing: border-box; }
  .home-page { font-family: var(--sans); color: var(--ink); }

  /* eyebrow label */
  .eyebrow {
    font-family: var(--sans);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--brand);
  }

  /* serif display headings */
  .serif-h1 {
    font-family: var(--serif);
    font-weight: 300;
    line-height: 1.15;
    color: var(--ink);
  }
  .serif-h2 {
    font-family: var(--serif);
    font-weight: 300;
    line-height: 1.2;
    color: var(--ink);
  }
  .serif-white {
    font-family: var(--serif);
    font-weight: 300;
    line-height: 1.2;
    color: #F5F0E8;
  }

  /* thin decorative rule */
  .brand-rule {
    width: 36px;
    height: 1px;
    background: var(--brand);
  }

  /* outline CTA button */
  .btn-outline {
    display: inline-block;
    font-family: var(--sans);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink);
    border: 0.5px solid var(--brand-dark);
    padding: 11px 28px;
    background: transparent;
    cursor: pointer;
    transition: background 0.25s, color 0.25s;
    text-decoration: none;
  }
  .btn-outline:hover {
    background: var(--brand);
    color: #fff;
    border-color: var(--brand);
  }
  .btn-outline-white {
    display: inline-block;
    font-family: var(--sans);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #F5F0E8;
    border: 0.5px solid rgba(255,255,255,0.5);
    padding: 11px 28px;
    background: transparent;
    cursor: pointer;
    transition: background 0.25s, color 0.25s;
    text-decoration: none;
  }
  .btn-outline-white:hover {
    background: rgba(255,255,255,0.12);
  }

  /* wave transition */
  .wave-transition {
    display: block;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  /* fade-up on scroll */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.12s; }
  .reveal-delay-2 { transition-delay: 0.24s; }
  .reveal-delay-3 { transition-delay: 0.36s; }
  .reveal-delay-4 { transition-delay: 0.48s; }

  /* image hover zoom */
  .img-zoom img {
    transition: transform 0.7s ease;
  }
  .img-zoom:hover img {
    transform: scale(1.07);
  }

  /* amenity cell hover */
  .amenity-cell {
    padding: 1.4rem 1rem;
    text-align: center;
    background: #fff;
    transition: background 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .amenity-cell:hover {
    background: var(--cream);
  }
  .amenity-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--cream);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.25s;
  }
  .amenity-cell:hover .amenity-icon {
    background: var(--brand);
  }
  .amenity-cell:hover .amenity-icon svg {
    stroke: #fff;
  }
  .amenity-label {
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-soft);
    font-family: var(--sans);
  }

  /* place card */
  .place-card {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
  }
  .place-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.7s ease;
    display: block;
  }
  .place-card:hover img {
    transform: scale(1.09);
  }
  .place-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(20,15,10,0.78) 0%, rgba(20,15,10,0.12) 55%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.1rem 1rem;
    transition: background 0.3s;
  }
  .place-card:hover .place-overlay {
    background: linear-gradient(to top, rgba(20,15,10,0.88) 0%, rgba(20,15,10,0.25) 65%, transparent 100%);
  }
  .place-name {
    font-family: var(--serif);
    font-size: 16px;
    font-weight: 400;
    color: #F5F0E8;
    line-height: 1.3;
  }
  .place-tag {
    font-size: 9px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(245,240,232,0.55);
    margin-top: 3px;
  }
  .place-dist {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--brand-light);
    margin-top: 6px;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.3s, transform 0.3s;
  }
  .place-card:hover .place-dist {
    opacity: 1;
    transform: translateY(0);
  }

  /* testimonial pull-quote */
  .pull-quote {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(18px, 2.2vw, 24px);
    color: var(--ink);
    line-height: 1.6;
    text-align: center;
  }

  /* season card */
  .season-card {
    background: #fff;
    border: 0.5px solid var(--border);
    border-radius: 4px;
    padding: 1.75rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: box-shadow 0.3s, transform 0.3s;
    position: relative;
    overflow: hidden;
  }
  .season-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--brand);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }
  .season-card:hover::before { transform: scaleX(1); }
  .season-card:hover {
    box-shadow: 0 8px 32px rgba(43,30,26,0.08);
    transform: translateY(-3px);
  }

  /* stats strip */
  .stat-item {
    flex: 1;
    text-align: center;
    padding: 1.25rem 0.5rem;
  }
  .stat-num {
    font-family: var(--serif);
    font-size: 28px;
    font-weight: 300;
    color: var(--brand);
    line-height: 1;
  }
  .stat-label {
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 5px;
    font-family: var(--sans);
  }

  /* hero pill indicator */
  .slide-dot {
    height: 3px;
    border-radius: 2px;
    background: rgba(255,255,255,0.35);
    transition: width 0.4s ease, background 0.4s ease;
    cursor: pointer;
  }
  .slide-dot.active {
    background: var(--brand-light);
  }

  @media (max-width: 768px) {
    .split-left, .split-right { padding: 2rem 1.5rem; }
    .place-card img { height: 180px; }
  }
`;

/* ─────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
const Home = () => {
  const navigate = useNavigate();
  useReveal();

  const amenities = [
    { icon: <Wifi size={18} strokeWidth={1.5} stroke="var(--brand)" />, label: 'Free WiFi' },
    { icon: <ParkingSquare size={18} strokeWidth={1.5} stroke="var(--brand)" />, label: 'Free Parking' },
    { icon: <Utensils size={18} strokeWidth={1.5} stroke="var(--brand)" />, label: 'Home Meals' },
    { icon: <Mountain size={18} strokeWidth={1.5} stroke="var(--brand)" />, label: 'Mountain View' },
    { icon: <Leaf size={18} strokeWidth={1.5} stroke="var(--brand)" />, label: 'Garden' },
    { icon: <Droplets size={18} strokeWidth={1.5} stroke="var(--brand)" />, label: 'Hot Water' },
  ];

  const places = [
    { name: 'Kainchi Dham', tag: 'Sacred temple', dist: '12 km', img: '/assets/kainchi-dham.jpg' },
    { name: 'Ranikhet Binsar', tag: 'Scenic beauty', dist: '28 km', img: '/assets/ranikhet-binsar.jpg' },
    { name: 'Dhokaney Waterfall', tag: 'Natural wonder', dist: '18 km', img: '/assets/dhokaney-waterfall.jpg' },
    { name: 'Chitai Temple', tag: 'Golu Devta', dist: '30 km', img: '/assets/chitai-temple-golu-devta.jpg' },
    { name: 'Local Museum', tag: 'Cultural heritage', dist: '5 km', img: '/assets/museum.jpg' },
  ];

  const testimonials = [
    { quote: 'An absolutely wonderful stay. The hospitality was exceptional, and the mountain views were breathtaking. Rooms were clean, comfortable, and full of character.', name: 'Ashish Bhatt', location: 'Delhi', date: 'March 2025', stars: 5, initials: 'AB' },
    { quote: 'Loved our stay! Great hospitality, beautiful mountain views, and super clean rooms. The family made us feel at home from the very first moment.', name: 'Ashish Chaudhary', location: 'Uttar Pradesh', date: 'January 2025', stars: 4, initials: 'AC' },
    { quote: 'Amazing experience! The location is perfect for nature lovers. Staff went above and beyond to make us feel at home. Great value for money!', name: 'Deependra Singh Bisht', location: 'Uttarakhand', date: 'December 2024', stars: 5, initials: 'DSB' },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const seasons = [
    { label: 'Spring', range: 'Mar – May', color: '#5a8a3c', items: ['Rhododendron blooms', 'Pleasant trekking weather', 'Bird migration season', 'Local festivals'] },
    { label: 'Summer', range: 'Jun – Aug', color: '#c47a2a', items: ['Escape plains heat', 'Green valleys & waterfalls', 'Monsoon magic', 'Cool mountain retreat'] },
    { label: 'Autumn', range: 'Sep – Nov', color: '#b85a20', items: ['Crystal-clear mountain views', 'Perfect trekking season', 'Harvest celebrations', 'Photography paradise'] },
    { label: 'Winter', range: 'Dec – Feb', color: '#3a7a9a', items: ['Snowfall experiences', 'Cozy bonfire evenings', 'Winter photography', 'Serene tranquility'] },
  ];

  return (
    <>
      <style>{globalStyles}</style>
      <div className="home-page">

        {/* ── HERO CAROUSEL ── */}
        <HeroCarousel />

        {/* ── WAVE TRANSITION ── */}
        <div style={{ background: 'var(--ink)', lineHeight: 0, marginTop: -2 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
            <path d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,80 L1440,0 L0,0 Z" fill="var(--ink)" />
            <path d="M0,80 C240,20 480,60 720,40 C960,20 1200,60 1440,30 L1440,80 Z" fill="var(--cream)" />
          </svg>
        </div>

        {/* ── WELCOME / INTRO ── */}
        <section style={{ background: 'var(--cream)', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
            <p className="eyebrow reveal">Almora · Uttarakhand</p>
            <div className="brand-rule reveal" />
            <h2 className="serif-h1 reveal" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              A home in the hills,<br />open to the world
            </h2>
            <p className="reveal reveal-delay-1" style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 560 }}>
              Escape from the hustle of everyday routine and slip into the scenic, relaxed atmosphere of Bisht Homestay — nestled in the serene Shivalik foothills, where tradition meets comfort, and every guest is treated as family.
            </p>
            <button className="btn-outline reveal reveal-delay-2" onClick={() => navigate('/rooms')}>
              Explore Rooms
            </button>
          </div>

          {/* Stats strip */}
          <div className="reveal reveal-delay-1" style={{ maxWidth: 600, margin: '3rem auto 0', display: 'flex', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', padding: '0 1.5rem' }}>
            <div className="stat-item" style={{ borderRight: '0.5px solid var(--border)' }}>
              <div className="stat-num">4.9★</div>
              <div className="stat-label">Guest Rating</div>
            </div>
            <div className="stat-item" style={{ borderRight: '0.5px solid var(--border)' }}>
              <div className="stat-num">200+</div>
              <div className="stat-label">Happy Stays</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">6yr</div>
              <div className="stat-label">In Hospitality</div>
            </div>
          </div>
        </section>

        {/* ── SPLIT: STORY + IMAGE ── */}
        <section style={{ background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="split-left reveal" style={{ background: 'var(--stone)', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.25rem' }}>
            <p className="eyebrow">Our story</p>
            <div className="brand-rule" />
            <h2 className="serif-h2" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
              Nestled in the<br />Shivalik foothills
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.85 }}>
              Constructed with a view of giving travellers a budget-friendly and authentic experience — giving employment to locals and promoting the rich culture of Uttarakhand. Wake up to breathtaking sunrise views, breathe in the pure mountain air, and immerse yourself in warm Pahadi hospitality.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.85 }}>
              Our homestay is the perfect base for exploring spiritual and natural wonders of the region — from ancient temples to pristine trekking trails.
            </p>
            <button className="btn-outline" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }} onClick={() => navigate('/experiences')}>
              Discover Experiences
            </button>
          </div>
          <div className="img-zoom split-right reveal reveal-delay-1" style={{ minHeight: 380, overflow: 'hidden' }}>
            <img src="/assets/homestay.jpg" alt="Bisht Homestay" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', minHeight: 380 }} />
          </div>
        </section>

        {/* ── AMENITIES ── */}
        <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
            <p className="eyebrow reveal">Included with every stay</p>
            <div className="brand-rule reveal" />
            <h2 className="serif-h2 reveal" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}>Our Amenities</h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ width: '100%', maxWidth: 640, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '0.5px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
            {amenities.map((a, i) => (
              <div key={i} className="amenity-cell"
                style={{
                  borderRight: i % 3 !== 2 ? '0.5px solid var(--border)' : 'none',
                  borderBottom: i < 3 ? '0.5px solid var(--border)' : 'none',
                }}>
                <div className="amenity-icon">{a.icon}</div>
                <span className="amenity-label">{a.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SPLIT: IMAGE + SPIRITUAL TEXT ── */}
        <section style={{ background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="img-zoom reveal" style={{ minHeight: 380, overflow: 'hidden' }}>
            <img src="/assets/kainchi-dham.jpg" alt="Kainchi Dham" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 380 }} />
          </div>
          <div className="reveal reveal-delay-1" style={{ background: 'var(--ink)', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.25rem' }}>
            <p className="eyebrow" style={{ color: 'var(--brand-light)' }}>Atithi Devo Bhava</p>
            <div className="brand-rule" />
            <h2 className="serif-white" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
              Spiritual journeys<br />await you
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'rgba(245,240,232,0.6)', lineHeight: 1.85 }}>
              Explore ancient temples including Kainchi Dham, Golu Devta Temple, and local village shrines. Experience morning aarti ceremonies and witness age-old spiritual traditions.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '0.5rem 0', listStyle: 'none', padding: 0 }}>
              {['Temple visits & morning aarti', 'Sunrise yoga & meditation', 'Guided pilgrimage tours', 'Interaction with local sadhus'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'rgba(245,240,232,0.65)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-outline-white" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }} onClick={() => navigate('/experiences')}>
              View All Experiences
            </button>
          </div>
        </section>

        {/* ── NEARBY PLACES ── */}
        <section style={{ background: 'var(--stone)', padding: '5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
            <p className="eyebrow reveal">Explore the region</p>
            <div className="brand-rule reveal" />
            <h2 className="serif-h2 reveal" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}>Local Places for Exploration</h2>
            <p className="reveal reveal-delay-1" style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', maxWidth: 460 }}>
              Discover the natural and spiritual wonders surrounding Bisht Homestay
            </p>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10, width: '100%', maxWidth: 1100 }}>
            {places.map((p, i) => (
              <div key={i} className="place-card">
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="place-overlay">
                  <div className="place-name">{p.name}</div>
                  <div className="place-tag">{p.tag}</div>
                  <div className="place-dist">
                    <MapPin size={9} stroke="var(--brand-light)" />
                    {p.dist}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NATURE & ADVENTURE SPLIT ── */}
        <section style={{ background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="reveal" style={{ background: 'var(--cream)', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
            <p className="eyebrow">For the adventurous</p>
            <div className="brand-rule" />
            <h2 className="serif-h2" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
              Nature &<br />Adventure
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 8 }}>Trekking trails</p>
                {[
                  { title: 'Karkotak Trek', desc: 'Easy 2–3 hr walk through pine forests & terraced fields' },
                  { title: 'Waterfall Trail', desc: 'Moderate trek to Dhokane Waterfall — ideal for photography' },
                  { title: 'Village Walks', desc: 'Gentle walks through local villages to experience rural life' },
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
                    <ArrowRight size={13} stroke="var(--brand)" style={{ marginTop: 3, flexShrink: 0 }} />
                    <div>
                      <span style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{t.title} — </span>
                      <span style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>{t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 8 }}>Outdoor activities</p>
                {['Bird Watching', 'Camping & Bonfire', 'Photography Tours', 'Star Gazing'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 8, alignItems: 'center' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="img-zoom reveal reveal-delay-1" style={{ minHeight: 380, overflow: 'hidden' }}>
            <img src="/assets/dhokaney-waterfall.jpg" alt="Dhokaney Waterfall" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 380 }} />
          </div>
        </section>

        {/* ── SEASONS ── */}
        <section style={{ background: 'var(--stone)', padding: '5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
            <p className="eyebrow reveal">Plan your visit</p>
            <div className="brand-rule reveal" />
            <h2 className="serif-h2 reveal" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}>Year-Round Experiences</h2>
            <p className="reveal reveal-delay-1" style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--muted)', maxWidth: 440 }}>
              Each season brings its own unique charm and activities
            </p>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, width: '100%', maxWidth: 1000 }}>
            {seasons.map((s, i) => (
              <div key={i} className="season-card" style={{ '--season-color': s.color }}>
                <div>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2 }}>{s.label}</p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: s.color, marginTop: 2 }}>{s.range}</p>
                </div>
                <div style={{ width: 28, height: 1, background: s.color }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: s.color, marginTop: 5, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ background: 'var(--cream)', padding: '5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <p className="eyebrow reveal">Guest voices</p>
            <div className="brand-rule reveal" />
            <h2 className="serif-h2 reveal" style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', textAlign: 'center' }}>What Our Guests Say</h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ maxWidth: 680, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--brand)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            {/* Quote */}
            <p className="pull-quote">"{testimonials[activeTestimonial].quote}"</p>
            {/* Attribution */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500 }}>
                {testimonials[activeTestimonial].initials}
              </div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500, color: 'var(--ink)', marginTop: 4 }}>{testimonials[activeTestimonial].name}</p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--muted)' }}>{testimonials[activeTestimonial].location} · {testimonials[activeTestimonial].date}</p>
            </div>
            {/* Dots */}
            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  style={{ width: i === activeTestimonial ? 28 : 8, height: 3, borderRadius: 2, background: i === activeTestimonial ? 'var(--brand)' : 'var(--border)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.35s ease' }} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section style={{ position: 'relative', overflow: 'hidden', minHeight: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* Background image */}
          <img
            src="/assets/16.jpeg"
            alt="Mountain backdrop"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          {/* Layered overlays: bottom-heavy dark + warm brand tint */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,15,10,0.92) 0%, rgba(20,15,10,0.65) 50%, rgba(20,15,10,0.45) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(43,20,10,0.22)' }} />

          {/* Top border accent */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 60, height: 1, background: 'var(--brand)' }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 2, padding: '5.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
            <p className="eyebrow reveal" style={{ color: 'var(--brand-light)' }}>Ready to escape?</p>
            <h2 className="serif-white reveal" style={{ fontSize: 'clamp(30px, 4.5vw, 56px)', maxWidth: 520, letterSpacing: '0.01em' }}>
              Come stay with us<br />in the mountains
            </h2>
            <p className="reveal reveal-delay-1" style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'rgba(245,240,232,0.6)', maxWidth: 400, lineHeight: 1.85 }}>
              Whether you seek spiritual enlightenment, adventure thrills, or peaceful relaxation — Bisht Homestay offers the perfect experience tailored to your dreams.
            </p>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
              <button className="btn-outline-white" onClick={() => navigate('/rooms')}>
                Book Your Stay
              </button>
              <button
                onClick={() => navigate('/experiences')}
                style={{ display: 'inline-block', fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)', background: 'transparent', border: 'none', cursor: 'pointer', padding: '11px 4px', textDecoration: 'none' }}
              >
                View Experiences →
              </button>
            </div>
          </div>

          {/* Bottom wave into footer */}
          <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
            <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 48 }}>
              <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="var(--ink)" />
            </svg>
          </div>
        </section>

      </div>
    </>
  );
};

/* ─────────────────────────────────────────────
   HERO CAROUSEL
───────────────────────────────────────────── */
const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { image: '/assets/11.jpeg', alt: 'Room interior', title: 'Experience Tranquility', subtitle: 'A peaceful retreat in the heart of the mountains', objectPosition: 'center 35%' },
    { image: '/assets/3.jpeg', alt: 'Affordable homestay', title: 'Affordable Luxury', subtitle: 'Comfortable stays that fit your budget', objectPosition: 'center 25%' },
    { image: '/assets/12.jpeg', alt: 'Comfortable homestay', title: 'Feel Like Home', subtitle: 'Warm hospitality and cozy accommodations', objectPosition: 'center 70%' },
    { image: '/assets/16.jpeg', alt: 'Mountain views', title: "Nature's Embrace", subtitle: 'Wake up to breathtaking mountain views', objectPosition: 'center center' },
  ];

  const nextSlide = useCallback(() => setCurrentIndex(p => (p + 1) % slides.length), [slides.length]);
  const prevSlide = useCallback(() => setCurrentIndex(p => (p - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(nextSlide, 4500);
    return () => clearInterval(t);
  }, [isPaused, nextSlide]);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: 'clamp(480px, 90vh, 780px)', overflow: 'hidden', background: '#1a1510' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div style={{ display: 'flex', height: '100%', transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.9s cubic-bezier(0.77, 0, 0.18, 1)' }}>
        {slides.map((slide, i) => (
          <div key={i} style={{ position: 'relative', width: '100%', height: '100%', flexShrink: 0 }}>
            <img src={slide.image} alt={slide.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: slide.objectPosition || 'center', display: 'block' }} />
            {/* Deep gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,15,10,0.82) 0%, rgba(20,15,10,0.35) 45%, rgba(20,15,10,0.15) 100%)' }} />
          </div>
        ))}
      </div>

      {/* Text content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '0 1.5rem 7rem', textAlign: 'center', pointerEvents: 'none' }}>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
          Bisht Homestay · Almora, Uttarakhand
        </p>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(32px, 5.5vw, 68px)', color: '#F5F0E8', lineHeight: 1.1, marginBottom: '1rem', transition: 'opacity 0.5s' }}>
          {slides[currentIndex].title}
        </h1>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 13, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
          {slides[currentIndex].subtitle}
        </p>
        <button
          onClick={() => navigate('/rooms')}
          className="btn-outline-white"
          style={{ pointerEvents: 'all' }}
        >
          Book Your Stay
        </button>
      </div>

      {/* Arrow navigation */}
      <button onClick={prevSlide}
        style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: '0.5px solid rgba(255,255,255,0.2)', borderRadius: '50%', cursor: 'pointer', color: '#fff', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide}
        style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: '0.5px solid rgba(255,255,255,0.2)', borderRadius: '50%', cursor: 'pointer', color: '#fff', backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div style={{ position: 'absolute', bottom: '2.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, alignItems: 'center' }}>
        {slides.map((_, i) => (
          <button key={i}
            onClick={() => setCurrentIndex(i)}
            style={{ width: i === currentIndex ? 32 : 8, height: 3, borderRadius: 2, background: i === currentIndex ? 'var(--brand-light)' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.4s ease' }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div style={{ position: 'absolute', bottom: '2rem', right: '1.5rem', display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 18, color: 'rgba(255,255,255,0.5)' }}>{String(currentIndex + 1).padStart(2, '0')}</span>
        <span style={{ fontFamily: 'var(--sans)', fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>/ {String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default Home;