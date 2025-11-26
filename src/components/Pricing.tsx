import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Start",
      price: "R$ 79,90",
      description: "Pequenas lojas",
      features: [
        "Cardápio digital",
        "CRM (gerenciamento de pedidos)",
        "Pagamento Online (Rápido e Seguro)",
        "Controle básico",
        "Sem limite de pedidos",
        "Suporte todos os dias, inclusive feriados e finais de semana",
      ],
    },
    {
      name: "Pro",
      price: "R$ 139,90",
      description: "Lojas com delivery e automações",
      features: [
        "Tudo do plano anterior",
        "Robô com IA para Whatsapp",
        "Relatórios de  vendas",
        "Cupons de desconto",
        "Taxas de entrega por bairro",
        "Agendamento de Pedidos"
      ],
      popular: true,
    },
    {
      name: "Turbo",
      price: "R$ 249,90",
      description: "Restaurantes maiores com anúncios e NF",
      features: [
        "Tudo do plano anterior",
        "Notas fiscais (NFC-e)",
        <span className='text-sm text-foreground font-bold underline'>Anúncios Google/Meta</span>,
        "Programa de fidelidade",
        "Cashback",
        <span className='text-sm text-foreground font-bold underline'>Disparo de mensagens</span>,
        "Recuperador de Vendas"
      ],
    },
  ];

  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planos flexíveis que crescem com você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-2xl border transition-all duration-300 animate-slide-up hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/40"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToForm}
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
