import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import {
	CheckCircle2,
	Rocket,
	ArrowRight,
	ExternalLink,
	Sparkles,
} from 'lucide-react'

interface SuccessProps {
	storeName: string
	redirectUrl: string
}

export const SuccessView: React.FC<SuccessProps> = ({
	storeName,
	redirectUrl,
}) => {
	const [countdown, setCountdown] = useState(5)

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer)
					window.location.href = redirectUrl
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [redirectUrl])

	return (
		<div
			id='success-view-container'
			className='min-h-[500px] flex flex-col items-center justify-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-xl max-w-xl mx-auto my-12 relative overflow-hidden'
		>
			{/* Absolute design accents */}
			<div className='absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500' />
			<div className='absolute -top-24 -left-20 w-48 h-48 rounded-full bg-rose-50 blur-3xl opacity-80' />
			<div className='absolute -bottom-24 -right-20 w-48 h-48 rounded-full bg-amber-50 blur-3xl opacity-80' />

			{/* Hero Animated Container */}
			<div className='relative mb-8'>
				{/* Particle circles */}
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
					transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
					className='absolute inset-0 bg-emerald-100 rounded-full blur-xl scale-125'
				/>

				<motion.div
					initial={{ scale: 0, rotate: -45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.15 }}
					className='relative w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white mx-auto'
				>
					<CheckCircle2 size={44} strokeWidth={2.5} />
				</motion.div>

				{/* Float sparkles */}
				<motion.div
					animate={{ y: [-5, 5, -5] }}
					transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
					className='absolute -top-3 -right-3 text-amber-500'
				>
					<Sparkles size={20} className='fill-current' />
				</motion.div>
			</div>

			{/* Main Copy */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3 }}
				className='space-y-4'
			>
				<span className='text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block'>
					RESTAURANTE CRIAÇÃO CONCLUÍDA
				</span>

				<h2 className='text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight'>
					Sua loja está online!
				</h2>

				<p className='text-slate-600 max-w-md mx-auto text-sm md:text-base leading-relaxed'>
					Parabéns! O delivery{' '}
					<span className='font-semibold text-slate-900'>
						"{storeName || 'Sua Loja'}"
					</span>{' '}
					foi provisionado e o cardápio digital de vendas foi publicado.
				</p>
			</motion.div>

			{/* Status Card */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.45 }}
				className='w-full bg-slate-50 border border-slate-100 rounded-2xl p-4.5 mt-8 max-w-sm flex flex-col gap-3 font-sans'
			>
				<div className='flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2'>
					<span>Hospedagem Dedicada</span>
					<span className='font-mono text-emerald-600 font-semibold flex items-center gap-1'>
						<span className='w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping' />{' '}
						ativo
					</span>
				</div>
				<div className='flex items-center justify-between text-xs'>
					<span className='text-slate-500'>Endereço do Cardápio:</span>
					<span className='font-mono text-slate-800 font-medium'>
						dulivi.com.br/{storeName.toLowerCase().replace(/\s+/g, '-')}
					</span>
				</div>
				<div className='flex items-center justify-between text-xs'>
					<span className='text-slate-500'>Painel de Gestão:</span>
					<span className='font-mono font-bold text-rose-600 flex items-center gap-0.5'>
						painel.dulivi.com.br <ExternalLink size={10} />
					</span>
				</div>
			</motion.div>

			{/* Redirect countdown progress */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.6 }}
				className='mt-8 space-y-4 w-full max-w-xs'
			>
				{/* Simulating progress bar */}
				<div className='w-full h-1 bg-slate-100 rounded-full overflow-hidden'>
					<motion.div
						initial={{ width: '0%' }}
						animate={{ width: '100%' }}
						transition={{ duration: 5, ease: 'linear' }}
						className='h-full bg-gradient-to-r from-emerald-500 to-teal-500'
					/>
				</div>

				<p className='text-xs text-slate-500 font-medium tracking-tight'>
					Redirecionando em{' '}
					<span className='font-mono text-slate-900 font-bold text-sm bg-slate-100 px-2 py-0.5 rounded border border-slate-200'>
						{countdown}
					</span>{' '}
					segundos...
				</p>

				<a
					href={redirectUrl}
					className='inline-flex items-center gap-2 justify-center w-full transform active:scale-95 text-xs text-slate-800 font-semibold hover:text-rose-600 transition-colors uppercase tracking-widest pt-1'
				>
					Ir para o painel imediatamente <ArrowRight size={13} />
				</a>
			</motion.div>
		</div>
	)
}
