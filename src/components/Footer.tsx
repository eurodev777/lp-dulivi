import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary">Dulivi</h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Cardápio Digital para Delivery - Sistema completo que revoluciona a gestão do seu restaurante. 
              Mais vendas, menos operacional, mais tempo para você.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              📱 Siga nosso canal no WhatsApp
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Funcionalidades</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Atendimento com IA</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Tráfego Pago</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Disparos</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Cardápio Digital</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Relatórios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Empresa</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li><a href="#team" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#contact-form" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Dulivi. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex gap-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
