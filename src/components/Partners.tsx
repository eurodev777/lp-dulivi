export const Partners = () => {
  const partners = [
    "Will the Burguer",
    "X-Calota",
    "Primeiro Reino Burguer",
    "La Brasa",
    "Moot Burguer",
    "Johnnie Grill",
    "Pasteleko",
    "Frango no Pote",
    "Spot Burguer"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Mais de 3000 restaurantes em todo o país confiam na Brendi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parceiros de sucesso
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg font-semibold text-foreground text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
