import { Search, Menu, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-nature rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">RR</span>
          </div>
          <span className="font-bold text-xl text-primary">RotaRural</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Destinos
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Experiências
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Heart className="w-4 h-4 mr-2" />
            Favoritos
          </Button>
          <Button variant="outline" size="sm">
            Entrar
          </Button>
          <Button size="sm" className="bg-gradient-nature text-white hover:opacity-90">
            Cadastrar Propriedade
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navegue pela plataforma de turismo rural
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Destinos
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Experiências
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <hr className="my-4" />
              <Button variant="outline" className="justify-start">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button className="bg-gradient-nature text-white justify-start">
                Cadastrar Propriedade
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;