import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">TR</span>
              </div>
              <span className="font-bold text-xl">TurismoRural</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Conectando pessoas às experiências rurais autênticas em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-nature-sage cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-nature-sage cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-nature-sage cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Destinos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Experiências</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Fazendas</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Pousadas Rurais</a></li>
            </ul>
          </div>

          {/* Para proprietários */}
          <div className="space-y-4">
            <h3 className="font-semibold">Proprietários</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Cadastrar Propriedade</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Área do Proprietário</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contato@turismorural.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 TurismoRural. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;