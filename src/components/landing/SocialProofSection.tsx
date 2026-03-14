import { motion } from "framer-motion";

const clients = [
  "Amarilo",
  "Cusezar",
  "Coninsa Ramón H",
  "AR Construcciones",
  "Constructora Bolívar",
];

const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary-foreground mb-3">
            Confianza respaldada por los grandes del sector
          </h2>
          <p className="text-primary-foreground/70 font-body">
            Hemos protegido los proyectos de las constructoras más importantes de Colombia
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300 rounded-xl px-8 py-4 cursor-default"
            >
              <span className="font-display font-bold text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
