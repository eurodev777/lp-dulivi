import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { api } from "../services/api";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    cpf: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.cpf) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      await api.post(`/store/create`, formData);

      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato com você.",
      });

      // Reset form
      setFormData({ name: "", email: "", password: "", phone: "", cpf: "" });

      // Redirect only on success
      window.location.href = "https://painel.dulivi.com.br/";
    } catch (err) {
      toast({
        title: "Erro ao criar loja!",
        description:
          "Tivemos um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-muted/30">
      <div className="lg:container px-6 mx-auto !max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Transforme seu restaurante agora
          </h2>
          <p className="text-lg text-muted-foreground">
            Fale com nossos especialistas e descubra como a Dulivi pode
            revolucionar seu negócio
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card lg:p-8 p-6 rounded-2xl shadow-lg border border-border"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-foreground"
            >
              Nome do estabelecimento *
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Nome da loja"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-foreground"
            >
              E-mail *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-foreground"
            >
              Senha *
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-foreground"
            >
              Telefone/WhatsApp *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-foreground"
            >
              Documento CPF *
            </label>
            <Input
              id="cpf"
              type="text"
              placeholder="Seu documento"
              value={formData.cpf}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove tudo que não é número
                setFormData({ ...formData, cpf: onlyNumbers });
              }}
              className="h-12"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 sm:text-lg text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
          >
            Quero conhecer a Dulivi <Send className="sm:ml-2 h-5 w-5" />
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Ao enviar, você concorda em receber comunicações da Dulivi
          </p>
        </form>
      </div>
    </section>
  );
};
