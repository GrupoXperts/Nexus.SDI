import { motion } from "framer-motion";
import { FileText, Award, BookOpen } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "Planos As-Built",
    description: "Documentación técnica exacta de su instalación.",
  },
  {
    icon: Award,
    title: "Certificado de Operatividad",
    description: "Documento oficial para bomberos y entidades regulatorias.",
  },
  {
    icon: BookOpen,
    title: "Bitácora Digital",
    description: "Historial de mantenimiento accesible en cualquier momento para auditorías internas.",
  },
];

const DeliverablesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-trust">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Entregables
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Lo que recibe con cada servicio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5">
                <d.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
