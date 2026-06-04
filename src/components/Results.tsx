import { TrendingUp, Store, ShoppingBag } from 'lucide-react'

export const Results = () => {
	const stats = [
		{
			number: '+120 milhões',
			label: 'faturados por restaurantes parceiros',
			icon: TrendingUp,
		},
		{
			number: '+1.000 clientes',
			label: 'utilizando a Dulivi em todo o Brasil',
			icon: Store,
		},
		{
			number: '+2 milhões',
			label: 'de pedidos processados',
			icon: ShoppingBag,
		},
	]

	return (
		<section
			id='resultados'
			className='py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5'
		>
			<div className='container mx-auto max-w-6xl'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-3xl md:text-5xl font-bold mb-4'>
						Resultados extraordinários
					</h2>
					<p className='text-xl text-muted-foreground'>
						alcançados pelos nossos clientes
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{stats.map((stat, index) => {
						const Icon = stat.icon

						return (
							<div
								key={index}
								className='flex flex-col items-center justify-center text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-slide-up'
								style={{ animationDelay: `${index * 0.15}s` }}
							>
								<div className='mb-5 p-4 rounded-2xl bg-primary/10'>
									<Icon className='h-8 w-8 text-primary' />
								</div>

								<div className='text-3xl md:text-4xl font-bold text-primary mb-3'>
									{stat.number}
								</div>

								<p className='text-muted-foreground'>{stat.label}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
