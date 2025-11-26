export const Results = () => {
  const stats = [
    {
      number: "+600 milhões",
      label: "faturados por restaurantes Dulivi",
      icon: "💰"
    },
    {
      number: "+5.000 clientes",
      label: "apaixonados pela Dulivi em todo o Brasil ❤️",
      icon: "🎉"
    },
    {
      number: "+10 milhões",
      label: "de pedidos finalizados",
      icon: "📦"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Resultados extraordinários
          </h2>
          <p className="text-xl text-muted-foreground">
            alcançados pelos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <p className="text-lg text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
