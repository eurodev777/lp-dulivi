import { Clock, DollarSign, FileText, Sparkles } from 'lucide-react'

export const WhyChoose = () => {
	const benefits = [
		{
			icon: DollarSign,
			title: '15 dias de teste grátis',
			description: 'Instalação gratuita sem custos adicionais',
		},
		{
			icon: FileText,
			title: 'Sem multa de cancelamento',
			description: 'Cancele quando quiser sem penalidades',
		},
		{
			icon: Clock,
			title: 'Suporte 24/7 via WhatsApp',
			description: 'Estamos prontos para auxiliar e tirar suas dúvidas',
		},
		{
			icon: Sparkles,
			title: 'Implementação em horas',
			description: 'Gerencie tudo de forma simples e direta',
		},
	]

	return (
		<section id='beneficios' className='py-24 bg-muted/30'>
			<div className='container mx-auto max-w-7xl'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-3xl md:text-5xl font-bold mb-6'>
						Por que escolher a <span className='text-[#1d84ff]'>Dulivi</span>?
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Oferecemos tudo que você precisa para automatizar o seu negócio digital
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon
						return (
							<div
								key={index}
								className='text-center p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up'
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className='inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4'>
									<Icon className='h-8 w-8' />
								</div>
								<h3 className='text-xl lg:text-lg font-bold mb-2 text-foreground'>
									{benefit.title}
								</h3>
								<p className='text-muted-foreground'>{benefit.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
