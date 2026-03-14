import { motion } from "framer-motion";
import { Gift, Stethoscope } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-nexus-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            🎁 Bonificaciones exclusivas
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Valor agregado sin costo adicional
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-2 border-nexus-gold/30 bg-nexus-gold/5 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-nexus-gold" />
              <span className="bg-nexus-gold/20 text-nexus-gold font-display font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Gratis
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Capacitación de Personal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Entrenamiento en uso de extintores y respuesta ante emergencias para su equipo de SST.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="border-2 border-nexus-gold/30 bg-nexus-gold/5 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-nexus-gold" />
              <span className="bg-nexus-gold/20 text-nexus-gold font-display font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                $0
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Primer Diagnóstico Técnico</h3>
            <p className="text-muted-foreground leading-relaxed">
              Evaluación inicial de su sistema actual sin compromiso de compra.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
