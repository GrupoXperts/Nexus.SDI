import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Interrumpen la operación durante el mantenimiento?",
    answer: "No, programamos los mantenimientos para no afectar el flujo laboral de su empresa.",
  },
  {
    question: "¿Es un gasto innecesario?",
    answer: "Es una inversión que evita multas y protege su patrimonio a largo plazo. El costo de no actuar siempre es mayor.",
  },
  {
    question: "¿Cuánto tiempo toma la instalación?",
    answer: "Depende de la complejidad del proyecto, pero nuestros equipos están capacitados para minimizar tiempos de implementación sin comprometer la calidad.",
  },
  {
    question: "¿Qué normativas cubren sus servicios?",
    answer: "Cubrimos todas las normativas técnicas vigentes en LATAM, incluyendo las regulaciones locales de bomberos y entidades de control.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background rounded-xl border-0 shadow-card-nexus px-6"
              >
                <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
