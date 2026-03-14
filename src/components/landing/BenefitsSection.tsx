import { motion } from "framer-motion";
import { CheckCircle, Shield, DollarSign, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Cumplimiento Total",
    description: "Operación bajo estándares técnicos vigentes para auditorías sin estrés.",
  },
  {
    icon: Shield,
    title: "Continuidad de Negocio",
    description: "Prevención de incendios que protege su capital y personal 24/7.",
  },
  {
    icon: DollarSign,
    title: "Ahorro Operativo",
    description: "Reducción de costos por reparaciones correctivas imprevistas.",
  },
  {
    icon: FileCheck,
    title: "Primas de Seguro",
    description: "Facilite la obtención de certificaciones para reducir costos de pólizas.",
  },
];

const BenefitsSection = () => {
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
            Beneficios
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            ¿Por qué elegir Nexus Protect?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-card-nexus hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <b.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
