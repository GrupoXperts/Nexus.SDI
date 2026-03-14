import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const NotForSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-extrabold text-2xl text-foreground mb-6 text-center">
            Esto <span className="text-accent">NO</span> es para usted si…
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Busca soluciones informales sin certificación técnica.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Es un administrador que no prioriza la seguridad de sus ocupantes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotForSection;
