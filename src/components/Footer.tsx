import { Button } from "@/components/ui/button";
import SvgLogo from "../components/svg/SvgLogo";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";
import SvgWhatsApp from "./svg/SvgWhatsApp";

export const Footer = () => {
  const openMail = () => {
    const to = "contato@dulivi.com.br";
    const subject = encodeURIComponent("Orçamento");
    const body = encodeURIComponent(
      "Olá, vim pelo site e gostaria de saber mais sobre a Dulivi"
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const scrollToForm = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1C20] text-[#fff] py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-1.5 mb-4">
              <SvgLogo width={28} height={28} />
              <h3 className="text-3xl font-bold text-primary mb-1">Dulivi</h3>
            </div>
            <p className="text-[#fff]/80 mb-6 leading-relaxed">
              Cardápio Digital para Delivery - Sistema completo que revoluciona
              a gestão do seu restaurante. Mais vendas, menos operacional, mais
              tempo para você.
            </p>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5513991027026&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+a+Dulivi&type=phone_number&app_absent=0"
              className="flex items-center gap-3 font-medium bg-[#14C65C] lg:text-base text-sm text-white px-6 py-3 rounded-xl w-fit shadow-lg 
         transition-transform duration-300 ease-out hover:scale-110 hover:shadow-[0_10px_20px_rgba(20,198,92,0.4)]"
            >
              Fale conosco via WhatsApp
              <SvgWhatsApp width={20} height={20} fill={"#fff"} />
            </a>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4 text-lg">Funcionalidades</h4>
            <ul className="space-y-3 text-[#fff]/80">
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Atendimento com IA</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Tráfego Pago</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Disparos</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Cardápio Digital</a></li>
              <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Relatórios</a></li>
            </ul>
          </div> */}

          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-xl">Empresa</h4>
            <ul className="space-y-3 text-[#fff]/80">
              <li>
                <a
                  onClick={() => {
                    scrollToForm("dulivi");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToForm("beneficios");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToForm("inicio");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToForm("contact-form");
                  }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-8 text-xl">Fale com a gente</h4>
            <ul className="space-y-8 text-[#fff]/80 text-lg">
              <li
                className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
                onClick={openMail}
              >
                <Mail size={22} />
                <span>contato@dulivi.com.br</span>
              </li>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Av.+Conselheiro+N%C3%A9bias,+444+-+Encruzilhada,+Santos+-+SP,+11045-000/@-23.9530184,-46.3253589,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce03a021b0eec7:0xe29508886c9225f7!8m2!3d-23.9530233!4d-46.322784!16s%2Fg%2F11cs5wzq0l?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
              >
                <MapPin size={23} />
                <span>Santos, SP</span>
              </a>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#fff]/60">
              © 2025 Dulivi. Todos os direitos reservados.
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

            <div className="flex gap-6 text-sm text-[#fff]/60">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
