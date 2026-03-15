import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import nexusLogo from "@/assets/nexus-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Infraestructura protegida por Nexus Protect" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-5">
        <img src={nexusLogo} alt="Nexus Protect" className="h-36 md:h-42 logo-glow" />
        <Button variant="cta-outline" size="sm" className="border-accent-foreground text-accent-foreground hover:bg-accent hover:text-accent-foreground" asChild>
          <a href="https://wa.me/573195992929" target="_blank" rel="noopener noreferrer">Contacto</a>
        </Button>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-accent font-display font-semibold text-sm tracking-widest uppercase">
              Desde 2016 protegiendo LATAM
            </span>
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-gradient-hero mb-6">
            Proteja su infraestructura y evite sanciones millonarias
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-4 max-w-2xl">
            Garantizamos que su sistema de detección de incendios sea 100% operativo y cumpla con todas las normativas técnicas en LATAM.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <AlertTriangle className="w-5 h-5 text-nexus-gold flex-shrink-0" />
            <p className="text-nexus-gold font-semibold text-sm md:text-base">
              Evite clausuras, multas y tragedias con el respaldo de expertos certificados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="h-14 px-10 text-lg rounded-lg" asChild>
              <a href="https://forms.gle/Aa7thXN2LHqWat2CA" target="_blank" rel="noopener noreferrer">
                SOLICITAR DIAGNÓSTICO GRATUITO
              </a>
            </Button>
            <Button variant="cta-outline" size="lg" className="h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Ver cómo funciona
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center gap-8 text-primary-foreground/50 text-sm font-body">
            <span>✓ Certificación técnica</span>
            <span>✓ Soporte 24/7</span>
            <span>✓ +500 proyectos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
