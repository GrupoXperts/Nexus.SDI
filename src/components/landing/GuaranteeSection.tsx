import { motion } from "framer-motion";
import { ShieldCheck, HeadphonesIcon } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-10 h-10 text-accent" />
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6">
            Garantía de Cumplimiento Normativo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Si su sistema no pasa una inspección técnica bajo nuestros servicios, <span className="text-foreground font-semibold">respondemos de inmediato</span>. Además, soporte técnico prioritario ante falsas alarmas.
          </p>
          <div className="flex items-center justify-center gap-3 text-accent font-display font-semibold">
            <HeadphonesIcon className="w-5 h-5" />
            <span>Soporte técnico prioritario incluido</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
