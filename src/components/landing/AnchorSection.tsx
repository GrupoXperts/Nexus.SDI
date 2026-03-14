import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRight } from "lucide-react";

const AnchorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-nexus-gold" />
            <span className="text-nexus-gold font-display font-bold text-sm tracking-widest uppercase">
              El costo de no actuar
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary-foreground leading-tight mb-6">
            Una multa o clausura puede costar <span className="text-accent">10 veces más</span> que un mantenimiento preventivo
          </h2>

          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
            Con Nexus Protect, obtiene protección premium a un precio competitivo. No espere a que sea demasiado tarde.
          </p>

          <Button variant="hero" size="lg" className="h-16 px-12 text-lg rounded-xl gap-3">
            SOLICITAR DIAGNÓSTICO GRATUITO AHORA
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnchorSection;
