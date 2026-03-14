import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent-foreground/20 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Clock className="w-7 h-7 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-accent-foreground">
                Promoción por tiempo limitado
              </h3>
              <p className="text-accent-foreground/80">
                Los diagnósticos gratuitos están sujetos a disponibilidad de agenda técnica esta semana.
              </p>
            </div>
          </div>

          <Button
            variant="default"
            size="lg"
            className="h-14 px-10 bg-primary-foreground text-accent font-display font-bold hover:bg-primary-foreground/90 rounded-xl gap-2 flex-shrink-0"
          >
            QUIERO MI SISTEMA CERTIFICADO
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
