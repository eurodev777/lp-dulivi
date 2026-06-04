import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
	ShoppingBag,
	MapPin,
	Phone,
	Clock,
	Star,
	ChevronRight,
	Check,
	Menu,
	Search,
	Heart,
	Plus,
} from 'lucide-react'
import { AccentColorKey } from '../types'

interface StorePreviewProps {
	storeName: string
	phone: string
	email: string
	accentKey: AccentColorKey
}

// Accent definitions mapping to Tailwind styles
export const ACCENT_THEMES: Record<
	AccentColorKey,
	{
		name: string
		bg: string
		text: string
		border: string
		badgeBg: string
		buttonGrad: string
	}
> = {
	dulivi: {
		name: 'Laranja Dulivi',
		bg: '#F97316',
		text: 'text-orange-600',
		border: 'border-orange-200 focus:border-orange-500 focus:ring-orange-500/20',
		badgeBg: 'bg-orange-50 text-orange-600 border-orange-100',
		buttonGrad:
			'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-500 shadow-orange-500/30',
	},
	emerald: {
		name: 'Verde Orgânico',
		bg: '#10B981',
		text: 'text-emerald-600',
		border:
			'border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20',
		badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
		buttonGrad:
			'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 shadow-emerald-600/30',
	},
	amber: {
		name: 'Laranja Gourmet',
		bg: '#F59E0B',
		text: 'text-amber-500 border-amber-100',
		border: 'border-amber-200 focus:border-amber-500 focus:ring-amber-500/20',
		badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
		buttonGrad:
			'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-amber-500/30',
	},
	indigo: {
		name: 'Azul Elegante',
		bg: '#4F46E5',
		text: 'text-indigo-600',
		border: 'border-indigo-200 focus:border-indigo-500 focus:ring-indigo-500/20',
		badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
		buttonGrad:
			'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 shadow-indigo-600/30',
	},
	coral: {
		name: 'Coral Vibrante',
		bg: '#FF2E93',
		text: 'text-pink-600',
		border: 'border-pink-200 focus:border-pink-500 focus:ring-pink-500/20',
		badgeBg: 'bg-pink-50 text-pink-600 border-pink-100',
		buttonGrad:
			'bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 shadow-pink-600/30',
	},
}

export const StorePreview: React.FC<StorePreviewProps> = ({
	storeName,
	phone,
	email,
	accentKey,
}) => {
	const [cartCount, setCartCount] = useState(0)
	const [likedItems, setLikedItems] = useState<Record<number, boolean>>({})
	const activeColor = ACCENT_THEMES[accentKey]

	const handleAddItem = (e: React.MouseEvent) => {
		e.stopPropagation()
		setCartCount((prev) => prev + 1)
	}

	const toggleLike = (id: number, e: React.MouseEvent) => {
		e.stopPropagation()
		setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }))
	}

	const demoProducts = [
		{
			id: 1,
			name: 'Chicken Burger',
			description:
				'Coxa e sobrecoxa de frango desossadas e empanadas, alface crespa, maionese gourmet.',
			price: 'R$ 42,90',
			image:
				'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop',
			badge: 'Destaque',
		},
		{
			id: 2,
			name: 'Double Cheddar Burger',
			description:
				'Dois blends suculentos de 120g, cheddar duplo cremoso, cebola grelhada e molho barbecue.',
			price: 'R$ 48,90',
			image:
				'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=300&auto=format&fit=crop',
			badge: undefined,
		},
	]

	const formattedPhone = phone || '(11) 98765-4321'
	const formattedName = storeName.trim() || 'Big Burger'

	return (
		<div
			id='store-preview-container'
			className='flex flex-col items-center justify-center w-full sticky top-8'
		>
			{/* Visual background splash */}
			<div
				className='absolute -inset-10 bg-slate-200/50 rounded-full blur-3xl opacity-60 pointer-events-none transition-colors duration-700'
				style={{ backgroundColor: `${activeColor.bg}10` }}
			/>

			{/* Real Phone Wrapper */}
			<div className='relative w-full max-w-[340px] md:max-w-[360px] aspect-[9/19.2] bg-[#090D16] rounded-[52px] p-3.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50 flex flex-col overflow-hidden select-none'>
				{/* Dynamic Island Pinout */}
				<div className='absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3.5'>
					<div className='w-2.5 h-2.5 bg-zinc-900 rounded-full border border-zinc-800' />
					<div className='w-1.5 h-1.5 bg-zinc-900 rounded-full border border-zinc-800' />
				</div>

				{/* Status Bar exactly matching the picture's solid dark style */}
				<div className='flex justify-between items-center text-[10.5px] text-zinc-300 px-5 pt-2 pb-1.5 font-bold z-40 select-none bg-[#090D16]'>
					<span>21:25</span>
					<div className='flex items-center gap-1.5 font-semibold text-zinc-200'>
						{/* Cellular Signal Strength representation */}
						<div className='flex items-end gap-[1.5px] h-2.5'>
							<span className='w-[1.5px] h-[3px] bg-zinc-300 rounded-[1px] block' />
							<span className='w-[1.5px] h-[5px] bg-zinc-300 rounded-[1px] block' />
							<span className='w-[1.5px] h-[7px] bg-zinc-300 rounded-[1px] block' />
							<span className='w-[1.5px] h-[9px] bg-zinc-300 rounded-[1px] block' />
						</div>
						<span className='text-[9.5px]'>100%</span>
						<div className='w-4 h-2 border border-zinc-300 rounded-[3px] relative flex p-[1px] items-center'>
							<div className='h-full w-full bg-zinc-200 rounded-[1.5px]' />
							<div className='w-[1.5px] h-1 bg-zinc-300 absolute -right-[2.5px] top-[1.5px] rounded-r-[1px]' />
						</div>
					</div>
				</div>

				{/* App Frame Content */}
				<div className='flex-1 bg-white rounded-[38px] overflow-hidden flex flex-col relative text-[#1E293B] font-sans'>
					{/* Main Top Header Section based on the precise screenshot layout */}
					<div className='bg-white px-4 pt-4 pb-2 z-20'>
						<div className='flex items-start gap-3'>
							{/* Brand Logo exactly matching screenshot (yellow rounded box) */}
							<div
								className='w-14 h-14 rounded-2xl flex flex-col items-center justify-center p-1 border-2 border-amber-300 shadow-xs shrink-0 relative overflow-hidden transition-all duration-300 bg-[#FFBE1A]'
								style={{
									backgroundColor: accentKey === 'dulivi' ? '#FFBE1A' : activeColor.bg,
									borderColor:
										accentKey === 'dulivi' ? '#EAB308' : `${activeColor.bg}dd`,
								}}
							>
								{/* Visual Burger Icon badge inside logo */}
								<div className='flex flex-col items-center'>
									<span className='text-[17px] leading-none mb-0.5'>🍔</span>
									<span className='text-[7px] font-black tracking-tight text-white bg-slate-900/90 px-1 py-0.5 rounded-sm uppercase leading-none font-sans'>
										BURGER
									</span>
								</div>
							</div>

							{/* Title & Status Block */}
							<div className='flex-1 min-w-0'>
								<span className='text-[11px] font-black text-[#22C55E] tracking-tight block uppercase leading-none'>
									Aberto até 23:59
								</span>
								<h3 className='font-sans text-[16px] font-bold text-slate-900 tracking-tight leading-snug line-clamp-1 mt-1'>
									{formattedName}
								</h3>
								<span className='text-[10px] text-slate-500 font-medium block truncate mt-0.5 leading-none'>
									Canto do Forte, Praia Grande
								</span>
							</div>
						</div>

						{/* Delivery Info Box exactly matching the 3-column pill container in screenshot */}
						<div className='grid grid-cols-3 border border-slate-100/80 rounded-xl bg-white p-2 mt-4 text-center divide-x divide-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.01)]'>
							<div className='px-1'>
								<span className='text-[9px] text-slate-400 font-bold block uppercase tracking-tight'>
									Entrega
								</span>
								<span className='text-[10.5px] text-slate-700 font-black'>1h - 2h</span>
							</div>
							<div className='px-1'>
								<span className='text-[9px] text-slate-400 font-bold block uppercase tracking-tight'>
									Pedido mínimo
								</span>
								<span className='text-[10.5px] text-slate-700 font-black font-mono'>
									R$ 20,00
								</span>
							</div>
							<div className='px-1'>
								<span className='text-[9px] text-slate-400 font-bold block uppercase tracking-tight'>
									Taxa de entrega
								</span>
								<span
									className='text-[10.5px] font-black font-mono'
									style={{
										color: activeColor.bg !== '#F97316' ? activeColor.bg : '#22C55E',
									}}
								>
									R$ 7,00
								</span>
							</div>
						</div>
					</div>

					{/* Navigation Bar / Hamburger row matching user screenshot */}
					<div className='border-t border-b border-slate-100/80 py-2.5 px-4 flex items-center justify-between text-[#1E293B] bg-white'>
						<Menu
							size={16}
							className='text-slate-600 cursor-pointer hover:text-slate-900 transition-colors shrink-0'
						/>
						<span className='font-sans font-bold text-slate-500 text-xs tracking-tight text-center flex-1'>
							{formattedName}s
						</span>
						<div className='w-4 h-4 shrink-0' /> {/* Spacer for centering */}
					</div>

					{/* Main List Scroller */}
					<div className='flex-1 overflow-y-auto bg-white scrollbar-none pb-24 select-none'>
						{/* Category Central Title precisely as shown */}
						<h4 className='text-center font-sans font-extrabold text-slate-800 text-[14px] mt-6 mb-4 tracking-tight'>
							{formattedName}s
						</h4>

						{/* Products List rendered in authentic modern visual cards */}
						<div className='px-4 space-y-4'>
							{demoProducts.map((p) => (
								<div
									key={p.id}
									onClick={handleAddItem}
									className='bg-white rounded-2xl flex gap-3.5 items-stretch transition-all duration-200 cursor-pointer relative pb-4 border-b border-slate-100 last:border-0'
								>
									{/* Left Column: Details & Pricing */}
									<div className='flex-1 flex flex-col justify-between pt-1'>
										<div>
											<h5 className='text-[13px] font-bold text-slate-900 tracking-tight leading-snug'>
												{p.name}
											</h5>
											<p className='text-[10px] text-slate-400 mt-1 leading-normal line-clamp-2'>
												{p.description}
											</p>
										</div>

										<div className='mt-3 flex items-center gap-1'>
											<span className='text-[10px] text-slate-400 font-medium'>
												A partir de
											</span>
											<span className='text-[12px] font-bold text-slate-900 font-mono'>
												{p.price}
											</span>
										</div>
									</div>

									{/* Right Column: Product Image */}
									<div className='w-[84px] h-[84px] rounded-2xl overflow-hidden shrink-0 relative bg-slate-50 border border-slate-100/50 shadow-3xs'>
										<img
											src={p.image}
											alt={p.name}
											className='w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300'
											referrerPolicy='no-referrer'
										/>

										{/* Floating mini interactive heart */}
										<button
											onClick={(e) => toggleLike(p.id, e)}
											className='absolute top-1 right-1 w-5 h-5 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-rose-500 shadow-sm border border-slate-100 transition-transform active:scale-90'
										>
											<Heart
												size={10}
												fill={likedItems[p.id] ? activeColor.bg : 'none'}
												stroke={likedItems[p.id] ? activeColor.bg : '#64748B'}
											/>
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Footer Copyright block precisely matching user screenshot */}
						<div className='text-center text-[10px] text-slate-400/80 py-8 font-sans font-medium tracking-wide'>
							© 2025 Dulivi
						</div>
					</div>

					{/* Sticky Mobile Checkout Bar preview - sliding up nicely if items are present */}
					<AnimatePresence>
						{cartCount > 0 && (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 50 }}
								className='absolute bottom-4 inset-x-3 bg-white border border-slate-100 p-2 z-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl'
							>
								<div
									// style={{ backgroundColor: activeColor.bg }}
									style={{ backgroundColor: '#1d84ff' }}
									className='text-white text-xs font-semibold py-2.5 rounded-xl px-3 flex items-center justify-between shadow-[0_4px_12px_rgba(249,115,22,0.2)]'
								>
									<div className='flex items-center gap-1.5 animate-pulse'>
										<ShoppingBag size={13} />
										<span className='font-mono text-[10px] bg-white/20 px-1.5 py-0.5 rounded'>
											{cartCount} item{cartCount !== 1 && 's'}
										</span>
									</div>
									<span className='font-display'>Ver meu Carrinho</span>
									<span className='font-mono font-bold text-[10px]'>
										R$ {(cartCount * 42.9).toFixed(2).replace('.', ',')}
									</span>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* Home Sweep Indicator Line */}
				<div className='w-24 h-1 bg-zinc-800 rounded-full mx-auto mt-2 z-40 shrink-0' />
			</div>

			{/* Modern instructions */}
			{/* <p className='text-slate-400 font-mono text-[10.5px] mt-4 flex items-center gap-1.5'>
				<span
					className='w-2 h-2 rounded-full inline-block animate-pulse shrink-0'
					style={{ backgroundColor: activeColor.bg }}
				/>
				Demos: clique nos pratos para adicionar ao carrinho!
			</p> */}
		</div>
	)
}
