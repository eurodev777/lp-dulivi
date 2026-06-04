import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ConciergeBell, Check } from 'lucide-react'

const rotatingTexts = [
	'Mais pedidos',
	'Vendas pelo WhatsApp',
	'Atendente virtual',
	'Sem taxas por pedido',
]

export const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length)
		}, 4000)

		return () => clearInterval(interval)
	}, [])

	const scrollToForm = () => {
		document
			.getElementById('contact-form')
			?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section
			id='inicio'
			className='relative max-w-6x mx-auto lg:min-h-screen flex lg:flex-row flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20'
		>
			<div className='container mx-auto max-w-6xl relative z-10 lg:ml-32'>
				<div className='text-start space-y-6 md:space-y-8 animate-fade-in'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm border border-primary/20'>
						<ConciergeBell className='h-4 w-4' />
						<span>Delivery 2.0</span>
					</div>

					<h1 className='text-3xl md:text-[4rem] font-bold max-w-lg'>
						<span className='block text-foreground leading-tight md:mb-8 mb-4'>
							<span className='text-primary'>Crie grátis</span> seu Cardápio Digital
							para Delivery
						</span>
						{/* <span className='block text-primary bg-clip-text bg-gradient-to-r from-primary to-primary/70 min-h-[1.2em] relative'>
							<span
								key={currentIndex}
								className='absolute inset-0 animate-text-rotate'
							>
								{rotatingTexts[currentIndex]}
							</span>
						</span> */}
					</h1>

					<div className='flex flex-col justify-start items-start gap-1 text-lg md:text-xl text-[#1a1a1a]'>
						<div className='flex lg:items-center items-start gap-2'>
							<Check strokeWidth={4} size={22} />
							<span>Pedidos no WhatsApp com atendente virtual</span>
						</div>

						<div className='flex lg:items-center items-start gap-2'>
							<Check strokeWidth={4} size={22} />
							<span>Canal de vendas sem taxas e com link próprio</span>
						</div>

						<div className='flex lg:items-center items-start gap-2'>
							<Check strokeWidth={4} size={22} />
							<span>Atraia clientes com anúncios online</span>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 justify-start items-center pt-4'>
						<Button
							size='lg'
							className='w-full sm:w-auto px-8 py-5 text-base md:text-lg'
							onClick={scrollToForm}
						>
							Criar cardápio grátis <ArrowRight className='ml-2 h-5 w-5' />
						</Button>
						<Button
							size='lg'
							variant='outline'
							onClick={() =>
								window.open('https://menu.dulivi.com.br/big-burger', '_blank')
							}
							className='w-full sm:w-auto px-8 py-5 text-base md:text-lg'
						>
							Ver cardápio
						</Button>
					</div>
				</div>
			</div>
			<img src='/dulivi.webp' className='w-full md:w-1/2' />
		</section>
	)
}
