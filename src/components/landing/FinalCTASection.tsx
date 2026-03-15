import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-nexus-blue-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary-foreground leading-tight mb-6">
            No espere a que suene la alarma para saber si su sistema funciona
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10">
            <strong className="text-primary-foreground">Nexus Protect:</strong> Expertos en salvar activos y vidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="h-16 px-12 text-lg rounded-xl gap-3" asChild>
              <a href="https://forms.gle/Aa7thXN2LHqWat2CA" target="_blank" rel="noopener noreferrer">
                SOLICITAR DIAGNÓSTICO GRATUITO
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="cta-outline"
              size="lg"
              className="h-16 px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-xl gap-2"
              asChild
            >
              <a href="tel:+573195992929">
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
