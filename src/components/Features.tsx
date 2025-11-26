import { MessageCircle, Target, Send, Menu, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Atendimento",
      description: "Atendimento humanizado e personalizado com IA.",
      items: [
        "Respostas imediatas",
        "Personalização avançada",
        "Integração com WhatsApp"
      ]
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Atraia novos clientes enquanto você foca no seu negócio",
      items: [
        "Automação completa",
        "Campanhas otimizadas",
        "Monitoramento em tempo real"
      ]
    },
    {
      icon: Send,
      title: "Disparos",
      description: "Comunicação personalizada que aumenta sua recorrência",
      items: [
        "Segmentação avançada",
        "Mensagens personalizadas",
        "Análise de resultados"
      ]
    },
    {
      icon: Menu,
      title: "Cardápio",
      description: "Experiência de usuário que impressiona seus clientes",
      items: [
        "Interface moderna",
        "Carregamento rápido",
        "Experiência otimizada"
      ]
    },
    {
      icon: BarChart3,
      title: "Relatórios",
      description: "Insights valiosos para o crescimento do seu negócio",
      items: [
        "Dashboard intuitivo",
        "Métricas em tempo real",
        "Relatórios detalhados"
      ]
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Como a Dulivi pode ajudar o seu negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as funcionalidades que vão transformar o seu delivery e a sua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/10 w-full"
                >
                  Teste grátis →
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
