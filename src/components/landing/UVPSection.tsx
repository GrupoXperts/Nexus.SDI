import { motion } from "framer-motion";
import { Shield, Flame, Clock } from "lucide-react";
import sensorImg from "@/assets/sensor-detail.jpg";

const UVPSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-display font-bold text-sm tracking-widest uppercase mb-4 block">
              Nuestra historia
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Seguridad certificada y <span className="text-accent">respuesta inmediata</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desde 2016, hemos visto cómo empresas líderes pierden la tranquilidad por auditorías de bomberos o sistemas inoperantes. No permita que un fallo técnico ponga en riesgo sus activos críticos y la continuidad de su negocio.
            </p>
            <p className="text-foreground font-semibold text-lg leading-relaxed">
              Instalación y mantenimiento técnico especializado que elimina la vulnerabilidad ante incendios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img src={sensorImg} alt="Sensor de detección de incendios" className="rounded-2xl shadow-elevated w-full" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-elevated">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8" />
                <div>
                  <p className="font-display font-bold text-2xl">8+</p>
                  <p className="text-sm text-primary-foreground/80">Años de experiencia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UVPSection;
