import { CheckCircle } from "lucide-react";

export default function Team({
  imageSrc = "/TeamDuliviMadri.png",
  imageAlt = "Equipe Dulivi",
}) {
  return (
    <section id="dulivi" className="bg-muted/30 py-20">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-start">
        {/* Imagem da equipe */}
        <div className="w-full lg:w-2/4 flex-shrink-0 lg:order-first order-last">
          <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-inner">
            {/* Imagem */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center block"
            />
            {/* Overlay preto */}
            <div className="absolute inset-0 bg-blue-950/15"></div>
          </div>
        </div>

        <div
          className="lg:block hidden"
          style={{
            width: "2px",
            height: "500px",
            background:
              "linear-gradient(to bottom, #1a1a1a33, #4FAEFF, #1a1a1a33)",
            position: "relative",
          }}
        >
          <span
            style={{
              content: "''",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1D84FF, #176ACC)",
              boxShadow: "0 0 15px #114B99",
            }}
          />
        </div>
        {/* Conteúdo */}
        <div className="w-full lg:w-2/3">
          <header className="flex flex-col">
            <div className="inline-block mb-10">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20">
                Nossa Missão
              </span>
            </div>
            <span className="lg:text-6xl text-3xl font-bold text-zinc-700">
              Por que existimos?
            </span>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #1D84FF, #114B99)",
                margin: "1.5em 0 2.5rem",
                borderRadius: "2px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #ffffff00, #ffffff80, #ffffff00)",
                  animation: "underlineShine 4s infinite",
                  content: "''",
                }}
              ></span>
            </div>
          </header>

          <div className="text-zinc-700 space-y-8 leading-relaxed">
            <p>
              Nós existimos porque acreditamos que os donos de restaurantes
              devem ter mais liberdade, seja ela financeira, do operacional ou
              de algum marketplace. Nós fazemos isso otimizando o tempo do dono
              de restaurante e aumentando muito o faturamento do seu negócio.
            </p>

            <p className="border-[#1D84FF] border-l-[3px] pl-4 py-1 italic text-lg">
              A Dulivi foi fundada nesse formato em 2023 e surgiu da união de
              pessoas que viveram as dores e os desafios de se ter um negócio
              próprio, seja através da família ou com a própria experiência.
            </p>
          </div>

          {/* Card com pilares */}
          <div className="mt-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up p-5">
            <h4 className="text-xl font-bold text-zinc-700">
              Hoje, temos 4 pilares principais que tornam isso possível:
            </h4>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-medium text-lg">
              {[
                "Cardápio digital",
                "Atendimento com IA",
                "Disparos inteligentes",
                "Tráfego pago com IA",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-none mt-1">
                    <CheckCircle className="w-5 h-5 text-[#1D84FF]" />
                  </span>
                  <span className="text-zinc-600">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-muted-foreground">
              Conheça mais sobre cada um deles nas funcionalidades.
            </p>
          </div>

          {/* CTA, opcional */}
          <div className="mt-4">
            <a
              href="#funcionalidades"
              className="inline-block text-sm font-medium underline"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
