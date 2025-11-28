import { useState, useEffect, useRef } from "react";
import SvgLogo from "./svg/SvgLogo";

export default function HeaderMenu() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fecha menu clicando fora do menu ou do botão
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Esconde o header ao rolar para baixo
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 left-0 backdrop-blur-md backdrop-saturate-100 bg-white/70 w-full z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* DESKTOP */}
      <header className="md:flex items-center justify-around py-3 hidden">
        <a href="/" className="flex items-center gap-1.5">
          <SvgLogo width={24} height={24} />
          <h3 className="text-2xl font-bold text-primary mb-1">Dulivi</h3>
        </a>
        <nav className="flex items-center">
          <ul className="flex items-center gap-4 font-medium">
            <li><a href="/">Início</a></li>
            <li><a href="#funcionalidades">Funcionalidades</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#dulivi">Sobre nós</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </nav>
        <aside className="flex items-center gap-8">
          <a href="https://painel-dulivi.netlify.app/" target="_blank" className="text-[#1d84ff] text-sm">Acessar</a>
          <a href="#contact-form" className="bg-[#1d84ff] px-4 py-2 rounded-md text-white text-sm">Quero testar</a>
        </aside>
      </header>

      {/* MOBILE */}
      <header className="md:hidden flex flex-col">
        {/* TOP BAR MOBILE */}
        <div className="flex items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-1.5">
            <SvgLogo width={22} height={22} />
            <h3 className="text-xl font-bold text-primary">Dulivi</h3>
          </a>

          {/* Botão hamburguer */}
          <button
            ref={buttonRef}
            onClick={() => setOpenMenu((prev) => !prev)}
            className="flex flex-col gap-1"
          >
            <span className="w-6 h-[3px] bg-black rounded-md"></span>
            <span className="w-6 h-[3px] bg-black rounded-md"></span>
            <span className="w-6 h-[3px] bg-black rounded-md"></span>
          </button>
        </div>

        {/* MENU MOBILE DROPDOWN */}
        <div
          ref={menuRef}
          className={`overflow-hidden transition-all duration-300
            ${openMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="flex items-center justify-center py-4">
            <ul className="flex flex-col items-center gap-3 font-medium">
              <li><a href="/" onClick={() => setOpenMenu(false)}>Início</a></li>
              <li><a href="#funcionalidades" onClick={() => setOpenMenu(false)}>Funcionalidades</a></li>
              <li><a href="#planos" onClick={() => setOpenMenu(false)}>Planos</a></li>
              <li><a href="#dulivi" onClick={() => setOpenMenu(false)}>Sobre nós</a></li>
              <li><a href="" onClick={() => setOpenMenu(false)}>Blog</a></li>
            </ul>
          </nav>

          <aside className="flex flex-col items-center gap-4 pb-4">
            <a href="https://painel-dulivi.netlify.app/" target="_blank" onClick={() => setOpenMenu(false)} className="text-[#1d84ff] text-sm">Acessar</a>
            <a href="#contact-form" onClick={() => setOpenMenu(false)} className="bg-[#1d84ff] px-4 py-2 rounded-md text-white text-sm">Quero testar</a>
          </aside>
        </div>
      </header>
    </div>
  );
}
