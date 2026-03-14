import nexusLogo from "@/assets/nexus-logo.png";

const FooterSection = () => {
  return (
    <footer className="py-10 bg-nexus-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={nexusLogo} alt="Nexus Protect" className="h-10" />
          <p className="text-primary-foreground/50 text-sm font-body text-center">
            © {new Date().getFullYear()} Nexus Protect. Todos los derechos reservados. Expertos en detección de incendios desde 2016.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
