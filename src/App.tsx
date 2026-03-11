import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  Clock,
  Sparkles,
  Heart,
  ShieldCheck
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Trattamenti', href: '#trattamenti' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif tracking-widest uppercase font-medium">
          Amaty
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-ink text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-brand-accent transition-all duration-300">
            Prenota Ora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-ink/5 p-8 md:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-ink text-white w-full py-4 rounded-full text-sm uppercase tracking-widest">
              Prenota Ora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2000" 
          alt="Spa atmosphere" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-brand-accent uppercase tracking-[0.3em] text-xs mb-6 font-semibold">
            Benvenuti nel Benessere
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
            Riscopri la tua <br />
            <span className="italic">bellezza naturale.</span>
          </h1>
          <p className="text-lg text-brand-ink/70 mb-10 max-w-lg leading-relaxed">
            Un'oasi di pace nel cuore della città. Trattamenti esclusivi pensati per rigenerare corpo e mente con l'eccellenza che meriti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-ink text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-brand-accent transition-all duration-300 shadow-lg shadow-brand-ink/10">
              Scopri i Trattamenti
            </button>
            <button className="border border-brand-ink/20 px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-brand-ink hover:text-white transition-all duration-300">
              Prenota Consulenza
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-brand-ink"></div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Trattamenti Viso',
      description: 'Pulizia profonda, anti-age e idratazione personalizzata per un viso radioso.',
      price: 'da €45',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Massaggi Corpo',
      description: 'Drenanti, rilassanti e decontratturanti per ritrovare l\'equilibrio psicofisico.',
      price: 'da €60',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Epilazione Laser',
      description: 'Tecnologia all\'avanguardia per una pelle liscia in modo permanente e sicuro.',
      price: 'da €30',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      title: 'Mani & Piedi',
      description: 'Manicure e pedicure curativa ed estetica con prodotti di alta gamma.',
      price: 'da €25',
      image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="trattamenti" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">I Nostri Trattamenti</h2>
          <div className="w-20 h-px bg-brand-accent mx-auto mb-6"></div>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Ogni servizio è un rituale di bellezza unico, eseguito con cura artigianale e tecnologie moderne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                    {service.price}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-brand-accent transition-colors">{service.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-xs uppercase tracking-widest font-bold border-b border-brand-ink/10 pb-1 group-hover:border-brand-accent transition-all">
                Dettagli <ChevronRight size={14} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="chi-siamo" className="py-32 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
                alt="Our center" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-accent/5 rounded-full blur-3xl"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block z-20"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Eccellenza</span>
              </div>
              <p className="text-2xl font-serif italic">"Oltre 15 anni di passione per il benessere."</p>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-accent uppercase tracking-[0.3em] text-xs mb-6 font-semibold block">
              La Nostra Filosofia
            </span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Un approccio olistico alla <br />
              <span className="italic text-brand-accent">tua cura personale.</span>
            </h2>
            <p className="text-lg text-brand-ink/70 mb-8 leading-relaxed">
              Amaty non è solo un centro estetico, è un rifugio dove il tempo si ferma. Crediamo che la vera bellezza nasca dall'armonia tra corpo e mente. Per questo utilizziamo solo prodotti biologici certificati e tecnologie non invasive.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Qualità</h4>
                  <p className="text-xs text-brand-muted">Standard igienici e professionali ai massimi livelli.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Heart className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Passione</h4>
                  <p className="text-xs text-brand-muted">Ogni cliente è unico e riceve attenzioni su misura.</p>
                </div>
              </div>
            </div>

            <button className="bg-brand-ink text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-brand-accent transition-all duration-300">
              Scopri la nostra storia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Elena Rossi",
      role: "Cliente da 3 anni",
      text: "Un'esperienza incredibile ogni volta. La pulizia del viso è la migliore che abbia mai provato, e l'atmosfera è davvero rilassante.",
      rating: 5
    },
    {
      name: "Marco Bianchi",
      role: "Cliente abituale",
      text: "Professionalità e cortesia. Il massaggio decontratturante mi ha risolto problemi di schiena che trascinavo da mesi.",
      rating: 5
    },
    {
      name: "Giulia Verdi",
      role: "Nuova cliente",
      text: "Ho provato l'epilazione laser e sono entusiasta dei risultati già dopo la prima seduta. Staff super preparato!",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Cosa Dicono di Noi</h2>
          <div className="w-20 h-px bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-bg p-10 rounded-3xl relative"
            >
              <div className="flex text-brand-accent mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg font-serif italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest">{review.name}</h4>
                <p className="text-xs text-brand-muted">{review.role}</p>
              </div>
              <div className="absolute top-10 right-10 opacity-5">
                <Sparkles size={64} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contatti" className="py-32 bg-brand-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl mb-10">Inizia il tuo viaggio <br /><span className="italic text-brand-accent">verso il benessere.</span></h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-2">Indirizzo</h4>
                  <p className="text-lg font-serif">Via Roma 123, 00100 Roma (RM)</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-2">Telefono</h4>
                  <p className="text-lg font-serif">+39 06 1234567</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-brand-accent mb-2">Orari</h4>
                  <p className="text-lg font-serif">Lun - Sab: 09:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 p-10 md:p-16 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl mb-8 font-serif">Richiedi un Appuntamento</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Nome</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-accent outline-none transition-colors" placeholder="Il tuo nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-accent outline-none transition-colors" placeholder="la-tua@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Trattamento</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-accent outline-none transition-colors appearance-none">
                  <option className="bg-brand-ink">Seleziona un trattamento</option>
                  <option className="bg-brand-ink">Trattamento Viso</option>
                  <option className="bg-brand-ink">Massaggio Corpo</option>
                  <option className="bg-brand-ink">Epilazione Laser</option>
                  <option className="bg-brand-ink">Mani & Piedi</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Messaggio</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-accent outline-none transition-colors resize-none" placeholder="Come possiamo aiutarti?"></textarea>
              </div>
              <button className="w-full bg-brand-accent text-brand-ink py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 mt-6">
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-brand-ink border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          &copy; {new Date().getFullYear()} Amaty Centro Estetico. Tutti i diritti riservati. P.IVA 01234567890
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
