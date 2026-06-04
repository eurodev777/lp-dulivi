import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, AlertCircle, X, Info } from 'lucide-react'
import { ToastMessage } from '../types'

interface ToastProps {
	messages: ToastMessage[]
	onClose: (id: string) => void
}

export const ToastContainer: React.FC<ToastProps> = ({ messages, onClose }) => {
	return (
		<div
			id='toast-wrapper'
			className='fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm pointer-events-none px-4'
		>
			<AnimatePresence>
				{messages.map((toast) => {
					const isSuccess = toast.variant === 'success'
					const isDestructive = toast.variant === 'destructive'

					return (
						<motion.div
							key={toast.id}
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -10, scale: 0.9, transition: { duration: 0.15 } }}
							layout
							className={`pointer-events-auto w-full bg-slate-900 border text-white rounded-xl shadow-xl flex items-start gap-3.5 p-4 relative overflow-hidden group ${
								isDestructive
									? 'border-red-500/30 shadow-red-950/20 bg-slate-950'
									: isSuccess
										? 'border-emerald-500/20 shadow-emerald-950/10'
										: 'border-slate-800/80 shadow-slate-950/20'
							}`}
						>
							{/* Dynamic sidebar color indicator */}
							<div
								className={`absolute left-0 top-0 bottom-0 w-1.5 ${
									isDestructive
										? 'bg-red-500'
										: isSuccess
											? 'bg-emerald-500'
											: 'bg-[#E11D48]'
								}`}
							/>

							{/* Status Icon */}
							<div className='shrink-0 mt-0.5'>
								{isSuccess && <CheckCircle2 className='h-5 w-5 text-emerald-400' />}
								{isDestructive && <AlertCircle className='h-5 w-5 text-red-400' />}
								{!isSuccess && !isDestructive && (
									<Info className='h-5 w-5 text-rose-400' />
								)}
							</div>

							{/* Content text */}
							<div className='flex-1 min-w-0 pr-4'>
								<h4 className='text-sm font-semibold tracking-tight text-white leading-5'>
									{toast.title}
								</h4>
								{toast.description && (
									<p className='text-xs text-zinc-300 mt-1 leading-normal font-sans'>
										{toast.description}
									</p>
								)}
							</div>

							{/* Close Button */}
							<button
								onClick={() => onClose(toast.id)}
								className='absolute top-2.5 right-2.5 p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors'
							>
								<X size={14} />
							</button>
						</motion.div>
					)
				})}
			</AnimatePresence>
		</div>
	)
}
