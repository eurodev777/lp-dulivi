import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ContactForm } from './ContactForm'
import { StorePreview } from './StorePreview'
import { ToastContainer } from './Toast'
import { SuccessView } from './SuccessView'
import { FormData, ToastMessage, AccentColorKey } from '../types'
import {
	Sparkles,
	Zap,
	TrendingUp,
	CheckCircle,
	HelpCircle,
	Smartphone,
} from 'lucide-react'

export default function ContactPage() {
	// Current live values to pass into the Store Preview
	const [storeName, setStoreName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [accentKey, setAccentKey] = useState<AccentColorKey>('dulivi')

	// Success view state toggle
	const [isSuccess, setIsSuccess] = useState(false)
	const [successStoreName, setSuccessStoreName] = useState('')

	// Native Toast State manager
	const [toasts, setToasts] = useState<ToastMessage[]>([])

	const addToast = (
		title: string,
		description: string,
		variant: 'default' | 'destructive' | 'success' = 'default',
	) => {
		const id = Math.random().toString(36).substring(2, 9)
		setToasts((prev) => [...prev, { id, title, description, variant }])

		// Auto-dismiss in 4.5s
		setTimeout(() => {
			removeToast(id)
		}, 4500)
	}

	const removeToast = (id: string) => {
		setToasts((prev) => prev.filter((t) => t.id !== id))
	}

	// Upward binding of form entry keystrokes to fuel live mockup updates
	const handleFormChange = (data: Partial<FormData>) => {
		if (data.name !== undefined) setStoreName(data.name)
		if (data.phone !== undefined) setPhone(data.phone)
		if (data.email !== undefined) setEmail(data.email)
		if (data.accentColor !== undefined)
			setAccentKey(data.accentColor as AccentColorKey)
	}

	const handleSuccess = (finalStoreName: string) => {
		setSuccessStoreName(finalStoreName)
		setIsSuccess(true)
	}

	// Features supporting premium onboarding copy
	const onboardingSellingPoints = [
		{
			title: 'Hospedagem inclusa',
			desc:
				'Sua marca em um endereço profissional Dulivi sem pagar por servidores adicionais.',
			icon: <Smartphone size={18} className='text-rose-500' />,
		},
		{
			title: 'WhatsApp Automatizado',
			desc:
				'Os pedidos dos clientes chegam formatados e prontos diretamente no seu número de suporte.',
			icon: <Zap size={18} className='text-amber-500' />,
		},
		{
			title: 'Aumento de Vendas em 40%',
			desc:
				'Clientes compram mais através de menus modernos, otimizados com categorizações e adicionais.',
			icon: <TrendingUp size={18} className='text-emerald-500' />,
		},
	]

	return (
		<div
			id='registration-applet'
			className='min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-primary selection:text-white'
		>
			{/* Main Container Viewport */}
			<main className='flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-12'>
				<AnimatePresence mode='wait'>
					{isSuccess ? (
						<motion.div
							key='success'
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
						>
							<SuccessView
								storeName={successStoreName}
								redirectUrl='https://painel.dulivi.com.br/'
							/>
						</motion.div>
					) : (
						<motion.div
							key='form-columns'
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -15 }}
							transition={{ duration: 0.4 }}
							className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'
						>
							{/* Left Column: Form & Key Value Propositions */}
							<div className='lg:col-span-7 flex flex-col gap-8'>
								{/* <motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className='brand-gradient text-white rounded-2xl p-6 relative overflow-hidden shadow-xl'
								>
									<div className='absolute top-0 right-0 w-44 h-44 bg-orange-500 rounded-full blur-[80px] opacity-30' />
									<div className='absolute -bottom-10 -left-10 w-44 h-44 bg-blue-500 rounded-full blur-[80px] opacity-20' />

									<div className='relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4'>
										<div className='p-3 bg-white/10 backdrop-blur rounded-xl text-orange-400 shrink-0 border border-white/10'>
											<Sparkles size={24} className='animate-bounce' />
										</div>
										<div>
											<span className='text-[10px] font-bold font-mono text-orange-400 uppercase tracking-widest bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20'>
												O FUTURO DO DELIVERY
											</span>
											<h3 className='text-lg md:text-xl font-display font-medium mt-1.5 leading-tight text-white tracking-tight'>
												Crie seu site de vendas oficial hoje mesmo
											</h3>
											<p className='text-xs text-slate-300 mt-1 leading-relaxed'>
												Livre de taxas abusivas sobre vendas. Sua marca própria, seus
												lucros, controle total e expansão rápida do seu negócio.
											</p>
										</div>
									</div>
								</motion.div> */}

								{/* The registration form element */}
								<ContactForm
									onFormChange={handleFormChange}
									onSuccess={handleSuccess}
									addToast={addToast}
								/>

								{/* Selling Points Accordion/List for Professional Authority */}
								<div className='space-y-4 px-2'>
									<h4 className='text-xs font-bold text-slate-400 uppercase tracking-wider font-mono'>
										Por que milhares escolhem a Dulivi?
									</h4>
									<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
										{onboardingSellingPoints.map((pt, idx) => (
											<div
												key={idx}
												className='bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col gap-2.5 items-start hover:border-slate-200 transition-colors'
											>
												<div className='p-2 bg-slate-50 rounded-xl border border-slate-100'>
													{pt.icon}
												</div>
												<div>
													<h5 className='text-xs font-bold text-slate-800 tracking-tight leading-none'>
														{pt.title}
													</h5>
													<p className='text-[11px] text-slate-400 leading-normal mt-1.5'>
														{pt.desc}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>

							{/* Right Column: Live Mockup Simulator */}
							<div className='lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24'>
								{/* Simulated Header block explaining the preview */}
								{/* <div className='glass-card rounded-[16px] p-5 relative overflow-hidden'>
									<div className='space-y-1 max-w-[70%]'>
										<span className='text-[9px] font-bold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1'>
											<Smartphone size={10} /> Simulador Live preview
										</span>
										<h4 className='text-xs font-bold text-slate-800 tracking-tight'>
											Veja sua loja se formando ao lado
										</h4>
										<p className='text-[11px] text-slate-400 leading-relaxed'>
											Digite o nome do estabelecimento e escolha as cores para ver a mágica
											em tempo real.
										</p>
									</div>

									<div className='bg-slate-50 p-2.5 rounded-xl text-slate-600 border border-slate-100 shrink-0 absolute right-4 top-1/2 -translate-y-1/2'>
										<Smartphone size={22} className='text-orange-500 animate-pulse' />
									</div>
								</div> */}

								{/* iPhone simulator panel */}
								<StorePreview
									storeName={storeName}
									phone={phone}
									email={email}
									accentKey={accentKey}
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</main>

			{/* Floating native notification toasts container */}
			<ToastContainer messages={toasts} onClose={removeToast} />
		</div>
	)
}
