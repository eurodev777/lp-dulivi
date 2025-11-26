import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato com você.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transforme seu restaurante agora
          </h2>
          <p className="text-lg text-muted-foreground">
            Fale com nossos especialistas e descubra como a Dulivi pode revolucionar seu negócio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-lg border border-border">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-foreground">
              Nome completo *
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              E-mail *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-foreground">
              Telefone/WhatsApp *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-foreground">
              Mensagem (opcional)
            </label>
            <Textarea
              id="message"
              placeholder="Conte-nos mais sobre seu restaurante..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[120px]"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
          >
            Quero conhecer a Dulivi <Send className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Ao enviar, você concorda em receber comunicações da Dulivi
          </p>
        </form>
      </div>
    </section>
  );
};
