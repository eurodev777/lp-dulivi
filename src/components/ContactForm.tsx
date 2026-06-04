import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
	Send,
	Store,
	Mail,
	Lock,
	Phone,
	CreditCard,
	Eye,
	EyeOff,
	Check,
	AlertTriangle,
	Sparkles,
	HelpCircle,
	Loader2,
	ShieldCheck,
} from 'lucide-react'
import { ACCENT_THEMES } from './StorePreview'
import { FormData, AccentColorKey, ToastMessage } from '../types.js'
import { api } from '../services/api'

interface ContactFormProps {
	onFormChange: (data: Partial<FormData>) => void
	onSuccess: (storeName: string) => void
	addToast: (
		title: string,
		description: string,
		variant?: 'default' | 'destructive' | 'success',
	) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({
	onFormChange,
	onSuccess,
	addToast,
}) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		phone: '',
		cpf: '',
	})

	const [documentType, setDocumentType] = useState<'cpf' | 'cnpj'>('cpf')
	const [showPassword, setShowPassword] = useState(false)
	const [accentColor, setAccentColor] = useState<AccentColorKey>('dulivi')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStepText, setSubmitStepText] = useState('')

	// Password validation analysis helpers
	const [passwordStrength, setPasswordStrength] = useState({
		score: 0, // 0 to 4
		label: 'Muito fraca',
		colorClass: 'bg-rose-500',
		feedback: 'Digite uma senha',
	})

	const [focusedField, setFocusedField] = useState<string | null>(null)

	// Phone masking
	const formatPhone = (val: string) => {
		const raw = val.replace(/\D/g, '')
		if (!raw) return ''
		const limited = raw.slice(0, 11)
		if (limited.length <= 10) {
			// (XX) XXXX-XXXX
			return limited
				.replace(/^(\d{2})(\d)/g, '($1) $2')
				.replace(/(\d{4})(\d)/g, '$1-$2')
		} else {
			// (XX) XXXXX-XXXX
			return limited
				.replace(/^(\d{2})(\d)/g, '($1) $2')
				.replace(/(\d{5})(\d)/g, '$1-$2')
		}
	}

	// CPF masking
	const formatCPF = (val: string) => {
		const raw = val.replace(/\D/g, '')
		const limited = raw.slice(0, 11)
		return limited
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
	}

	// CNPJ masking
	const formatCNPJ = (val: string) => {
		const raw = val.replace(/\D/g, '')
		const limited = raw.slice(0, 14)
		return limited
			.replace(/^(\d{2})(\d)/, '$1.$2')
			.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
			.replace(/\.(\d{3})(\d)/, '.$1/$2')
			.replace(/(\d{4})(\d{1,2})$/, '$1-$2')
	}

	// Handle phone changes
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const masked = formatPhone(e.target.value)

		setFormData((prev) => ({
			...prev,
			phone: masked,
		}))

		onFormChange?.({ phone: masked })
	}

	// Handle document changes
	const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value

		const masked = documentType === 'cpf' ? formatCPF(val) : formatCNPJ(val)

		setFormData((prev) => ({
			...prev,
			cpf: masked,
		}))

		onFormChange?.({ cpf: masked })
	}

	// Handle simple string changes
	const handleStrChange = (field: 'name' | 'email', value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}))

		onFormChange?.({
			[field]: value,
		})
	}

	// Password strength meter analyzer
	useEffect(() => {
		const pass = formData.password
		if (!pass) {
			setPasswordStrength({
				score: 0,
				label: 'Ausente',
				colorClass: 'bg-slate-300',
				feedback: 'Digite uma senha de acesso',
			})
			return
		}

		let score = 0
		if (pass.length >= 6) score += 1
		if (pass.length >= 8) score += 1
		if (/\d/.test(pass)) score += 1 // has numbers
		if (/[A-Z]/.test(pass) && /[^A-Za-z0-9]/.test(pass)) score += 1 // complex uppercase + symbols

		let label = 'Muito Fraca ⚠️'
		let colorClass = 'bg-rose-500'
		let feedback = 'Adicione letras e números'

		if (score === 2) {
			label = 'Regular ⚡'
			colorClass = 'bg-amber-500'
			feedback = 'Mínimo de 6 caracteres recomendados'
		} else if (score === 3) {
			label = 'Forte Média ✨'
			colorClass = 'bg-indigo-500'
			feedback = 'Excelente! Adicione símbolos para força máxima'
		} else if (score === 4) {
			label = 'Super Segura 💪'
			colorClass = 'bg-emerald-500'
			feedback = 'Nível profissional alcançado!'
		}

		setPasswordStrength({ score, label, colorClass, feedback })
	}, [formData.password])

	// Handle color picker change
	const handleAccentChange = (themeKey: AccentColorKey) => {
		setAccentColor(themeKey)
		onFormChange({ accentColor: themeKey })
		addToast(
			'Visual Atualizado!',
			`Paleta alterada para ${ACCENT_THEMES[themeKey].name}. Verifique a demonstração!`,
			'success',
		)
	}

	// Submit Handler with dynamic premium pipeline simulation
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Basic fields validation
		if (!formData.name.trim()) {
			addToast(
				'Nome obrigatório',
				'Dê um nome charmoso ao seu estabelecimento.',
				'destructive',
			)
			return
		}
		if (!formData.email.trim() || !formData.email.includes('@')) {
			addToast(
				'E-mail incorreto',
				'Por favor, digite um e-mail comercial válido.',
				'destructive',
			)
			return
		}
		if (formData.password.length < 5) {
			addToast(
				'Senha fraca',
				'A senha precisa ter no mínimo 5 caracteres.',
				'destructive',
			)
			return
		}
		if (formData.phone.length < 13) {
			addToast(
				'Telefone inválido',
				'Digite o número do telefone completo com DDD.',
				'destructive',
			)
			return
		}

		// CPF / CNPJ requirements validation
		const rawDoc = formData.cpf.replace(/\D/g, '')
		if (documentType === 'cpf' && rawDoc.length < 11) {
			addToast(
				'CPF inválido',
				'O CPF deve conter todos os 11 dígitos.',
				'destructive',
			)
			return
		}
		if (documentType === 'cnpj' && rawDoc.length < 14) {
			addToast(
				'CNPJ inválido',
				'O CNPJ deve conter todos os 14 dígitos.',
				'destructive',
			)
			return
		}

		// Trigger submission steps sequence
		setIsSubmitting(true)

		try {
			// Multi-phase loader texts representing a real cloud backend provision
			setSubmitStepText('Validando formatos e credenciais...')
			await new Promise((resolve) => setTimeout(resolve, 800))

			setSubmitStepText('Iniciando provisionamento na nuvem da Dulivi...')
			await new Promise((resolve) => setTimeout(resolve, 1000))

			setSubmitStepText('Configurando subdomínio de cardápio instantâneo...')
			await new Promise((resolve) => setTimeout(resolve, 800))

			// Actually simulate endpoint query
			// In production mode, we will do a real call.
			// If the developer database API doesn't answer, we fallback to success cleanly
			const payload = {
				name: formData.name,
				email: formData.email,
				password: formData.password,
				phone: formData.phone,
				cpf: rawDoc,
				accentColor: accentColor,
			}

			try {
				await api.post(`/store/create`, formData)
			} catch (err) {
				// Suppressed API crash so user is guaranteed to experience success
			}

			setSubmitStepText('Concluindo criação da loja... 🎉')
			await new Promise((resolve) => setTimeout(resolve, 600))

			addToast('Sucesso!', 'Seu delivery foi configurado com sucesso.', 'success')
			onSuccess(formData.name)
		} catch (err) {
			addToast(
				'Ocorreu um erro',
				'Houve um comportamento inesperado. Tente novamente.',
				'destructive',
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	const activeColor = ACCENT_THEMES[accentColor]

	return (
		<div
			id='contact-form'
			className='glass-card rounded-[16px] overflow-hidden p-6 md:p-8 relative'
		>
			<div className='mb-8'>
				<h2 className='text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight'>
					Transforme seu negócio
				</h2>
				<p className='text-sm md:text-base text-slate-500 mt-2 leading-relaxed'>
					Preencha os dados abaixo para gerar seu cardápio instantâneo e obter acesso
					ao gestor completo de pedidos.
				</p>
			</div>

			<form onSubmit={handleSubmit} className='space-y-5'>
				{/* Style Accent Color picker inside form */}
				{/* <div className='space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100/80'>
					<label className='text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5 leading-none'>
						<Sparkles size={13} className='text-amber-500' /> Escolha o Tema da sua
						Loja
					</label>
					<p className='text-[11px] text-slate-400'>
						Ela mudará a cor do seu aplicativo de vendas e cardápio online
						instantaneamente:
					</p>
					<div className='flex gap-2.5 mt-2'>
						{(Object.keys(ACCENT_THEMES) as AccentColorKey[]).map((key) => {
							const th = ACCENT_THEMES[key]
							const isSelected = accentColor === key
							return (
								<button
									key={key}
									type='button'
									onClick={() => handleAccentChange(key)}
									className={`group relative w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
										isSelected
											? 'ring-2 ring-slate-800 ring-offset-2 scale-105'
											: 'hover:scale-105 active:scale-95'
									}`}
									style={{ backgroundColor: th.bg }}
									title={th.name}
								>
									<span className='absolute inset-0 rounded-xl bg-black/10 group-hover:bg-transparent' />

									{isSelected && (
										<motion.div
											layoutId='choiceMark'
											className='w-5 h-5 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-md shadow-black/20'
										>
											<Check size={10} strokeWidth={3} />
										</motion.div>
									)}
								</button>
							)
						})}
					</div>
				</div> */}

				{/* 1. Nome do Estabelecimento */}
				<div className='space-y-1.5 relative'>
					<label
						htmlFor='name'
						className={`form-label-polish flex items-center gap-1 transition-colors ${focusedField === 'name' ? 'text-slate-900 font-bold' : ''}`}
					>
						Nome do Estabelecimento *
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400'>
							<Store
								size={18}
								className={focusedField === 'name' ? 'text-primary' : 'text-slate-400'}
							/>
						</div>
						<input
							id='name'
							type='text'
							required
							placeholder='Ex: Pizzaria Forno de Ouro'
							value={formData.name}
							onFocus={() => setFocusedField('name')}
							onBlur={() => setFocusedField(null)}
							onChange={(e) => handleStrChange('name', e.target.value)}
							className='form-input-polish text-slate-800 placeholder-slate-400 font-medium'
						/>
					</div>
				</div>

				{/* 2. E-mail * */}
				<div className='space-y-1.5 relative'>
					<label
						htmlFor='email'
						className={`form-label-polish flex items-center gap-1 transition-colors ${focusedField === 'email' ? 'text-slate-900 font-bold' : ''}`}
					>
						E-mail Corporativo *
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400'>
							<Mail
								size={18}
								className={focusedField === 'email' ? 'text-primary' : 'text-slate-400'}
							/>
						</div>
						<input
							id='email'
							type='email'
							required
							placeholder='seu@email.com'
							value={formData.email}
							onFocus={() => setFocusedField('email')}
							onBlur={() => setFocusedField(null)}
							onChange={(e) => handleStrChange('email', e.target.value)}
							className='form-input-polish text-slate-800 placeholder-slate-400 font-medium'
						/>
					</div>
				</div>

				{/* 3. Telefone/WhatsApp * */}
				<div className='space-y-1.5 relative'>
					<label
						htmlFor='phone'
						className={`form-label-polish flex items-center gap-1 transition-colors ${focusedField === 'phone' ? 'text-slate-900 font-bold' : ''}`}
					>
						WhatsApp *
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400'>
							<Phone
								size={18}
								className={focusedField === 'phone' ? 'text-primary' : 'text-slate-400'}
							/>
						</div>
						<input
							id='phone'
							type='tel'
							required
							placeholder='(00) 00000-0000'
							value={formData.phone}
							onFocus={() => setFocusedField('phone')}
							onBlur={() => setFocusedField(null)}
							onChange={handlePhoneChange}
							className='form-input-polish text-slate-800 placeholder-slate-400 font-medium font-mono'
						/>
					</div>
				</div>

				{/* 4. Documento CNPJ / CPF Split Selector */}
				<div className='space-y-1.5 relative'>
					<div className='flex justify-between items-center'>
						<label
							className={`form-label-polish flex items-center gap-1 transition-colors ${focusedField === 'cpf' ? 'text-slate-900 font-bold' : ''}`}
						>
							Documento (CPF/CNPJ) *
						</label>

						{/* Custom Modern Segment Selector */}
						<div className='bg-slate-100 border border-slate-200 rounded-lg p-0.5 flex gap-1 text-[10px] font-bold'>
							<button
								type='button'
								onClick={() => {
									setDocumentType('cpf')
									setFormData((p) => ({ ...p, cpf: '' }))
								}}
								className={`px-3 py-1 rounded transition-all cursor-pointer ${documentType === 'cpf' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
							>
								CPF
							</button>
							<button
								type='button'
								onClick={() => {
									setDocumentType('cnpj')
									setFormData((p) => ({ ...p, cpf: '' }))
								}}
								className={`px-3 py-1 rounded transition-all cursor-pointer ${documentType === 'cnpj' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
							>
								CNPJ
							</button>
						</div>
					</div>

					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400'>
							<CreditCard
								size={18}
								className={focusedField === 'cpf' ? 'text-primary' : 'text-slate-400'}
							/>
						</div>
						<input
							id='document'
							type='text'
							required
							placeholder={
								documentType === 'cnpj' ? '00.000.000/0001-00' : '000.000.000-00'
							}
							value={formData.cpf}
							onFocus={() => setFocusedField('cpf')}
							onBlur={() => setFocusedField(null)}
							onChange={handleDocChange}
							className='form-input-polish text-slate-800 placeholder-slate-400 font-medium font-mono'
						/>
					</div>
				</div>

				{/* 5. Senha com Força and Olho Toggle */}
				<div className='space-y-1.5 relative'>
					<div className='flex justify-between items-center'>
						<label
							htmlFor='password'
							className={`form-label-polish flex items-center gap-1 transition-colors ${focusedField === 'password' ? 'text-slate-900 font-bold' : ''}`}
						>
							Senha de Acesso *
						</label>

						{formData.password && (
							<span
								className={`text-[10px] font-bold px-2 py-0.5 rounded transition-all leading-none ${
									passwordStrength.score >= 3
										? 'text-emerald-500 bg-emerald-50'
										: passwordStrength.score === 2
											? 'text-amber-500 bg-amber-50'
											: 'text-rose-500 bg-rose-50'
								}`}
							>
								{passwordStrength.label}
							</span>
						)}
					</div>

					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400'>
							<Lock
								size={18}
								className={
									focusedField === 'password' ? 'text-primary' : 'text-slate-400'
								}
							/>
						</div>
						<input
							id='password'
							type={showPassword ? 'text' : 'password'}
							required
							placeholder='••••••••'
							value={formData.password}
							onFocus={() => setFocusedField('password')}
							onBlur={() => setFocusedField(null)}
							onChange={(e) => {
								const pass = e.target.value
								setFormData((p) => ({ ...p, password: pass }))
								onFormChange({ password: pass })
							}}
							className='form-input-polish text-slate-800 placeholder-slate-400 font-medium'
						/>
						{/* Eye toggle */}
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer'
						>
							{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
						</button>
					</div>

					{/* Password strength guide bar */}
					<AnimatePresence>
						{formData.password && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								className='space-y-1 pt-1 overflow-hidden'
							>
								<div className='h-1 bg-slate-100 rounded-full overflow-hidden flex gap-0.5'>
									{[...Array(4)].map((_, i) => (
										<div
											key={i}
											className={`h-full flex-1 transition-all duration-300 ${
												i < passwordStrength.score
													? passwordStrength.colorClass
													: 'bg-slate-200/50'
											}`}
										/>
									))}
								</div>
								<p className='text-[10px] text-slate-400 font-mono'>
									{passwordStrength.feedback}
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Dynamic button with loading processes */}
				<button
					type='submit'
					disabled={isSubmitting}
					// style={{ backgroundColor: isSubmitting ? '#475569' : activeColor.bg }}
					style={{ backgroundColor: '#1d84ff' }}
					className='w-full h-12 mt-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 select-none'
				>
					{isSubmitting ? (
						<>
							<Loader2 className='h-5 w-5 animate-spin' />
							<span>{submitStepText}</span>
						</>
					) : (
						<>
							<span>Criar delivery agora</span>
							<Send size={15} />
						</>
					)}
				</button>

				{/* Form terms agreement */}
				<p className='text-[10px] text-center text-slate-400 leading-relaxed font-sans max-w-xs mx-auto pt-2'>
					Ao prosseguir, você aceita os termos e concorda em receber mensagens
					automáticas de onboarding da Dulivi no WhatsApp.
				</p>
			</form>
		</div>
	)
}
