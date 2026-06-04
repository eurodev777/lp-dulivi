import { useState, useEffect, useRef } from 'react'
import SvgLogo from './svg/SvgLogo'
import { UserRound } from 'lucide-react'

export default function HeaderMenu() {
	const [hidden, setHidden] = useState(false)
	const [lastScroll, setLastScroll] = useState(0)
	const [openMenu, setOpenMenu] = useState(false)

	const menuRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)

	// Fecha menu clicando fora do menu ou do botão
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target as Node)
			) {
				setOpenMenu(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Esconde o header ao rolar para baixo
	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY
			if (current > lastScroll && current > 50) {
				setHidden(true)
			} else {
				setHidden(false)
			}
			setLastScroll(current)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScroll])

	function scrollIntoView(id) {
		const el = document.getElementById(`${id}`)
		el?.scrollIntoView({ behavior: 'smooth' })
		setOpenMenu(false)
	}

	return (
		<div
			className={`fixed top-0 left-0 backdrop-blur-md backdrop-saturate-100 bg-white/70 w-full z-50 transition-transform duration-300
        ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
		>
			{/* DESKTOP */}
			<header className='lg:flex items-center justify-around py-3 hidden'>
				<a href='/' className='flex items-center gap-1.5 min-w-[210px]'>
					<SvgLogo width={28} height={28} />
					<h3 className='text-3xl font-bold text-primary mb-1'>Dulivi</h3>
				</a>
				<nav className='flex items-center'>
					<ul className='flex items-center gap-4 font-medium'>
						<li>
							<a onClick={() => scrollIntoView('inicio')} className='cursor-pointer'>
								Início
							</a>
						</li>
						<li>
							<a
								onClick={() => scrollIntoView('funcionalidades')}
								className='cursor-pointer'
							>
								Funcionalidades
							</a>
						</li>
						<li>
							<a onClick={() => scrollIntoView('planos')} className='cursor-pointer'>
								Planos
							</a>
						</li>
						<li>
							<a onClick={() => scrollIntoView('dulivi')} className='cursor-pointer'>
								Sobre nós
							</a>
						</li>
						<li>
							<a href=''>Blog</a>
						</li>
					</ul>
				</nav>
				<aside className='flex items-center gap-3'>
					<a
						onClick={() => scrollIntoView('contact-form')}
						className='bg-[#1d84ff] px-4 py-2 rounded-md text-white font-semibold text-sm relative overflow-hidden cursor-pointer'
					>
						Criar cardápio grátis
						<span className='absolute top-[-1px] right-[-1px] text-[11px] leading-3 text-black bg-white/80 px-1.5 rounded-[2px] montserrat'>
							15 dias
						</span>
					</a>
					<a
						href='https://painel.dulivi.com.br'
						target='_blank'
						className='px-4 py-1.5 rounded-md font-semibold text-black flex items-center gap-1 border-[1px] border-border'
					>
						<UserRound size={16} strokeWidth={3} />
						Fazer login
					</a>
				</aside>
			</header>

			{/* MOBILE */}
			<header className='lg:hidden flex flex-col'>
				{/* TOP BAR MOBILE */}
				<div className='flex items-center justify-between px-4 py-4'>
					<a href='/' className='flex items-center gap-1.5'>
						<SvgLogo width={22} height={22} />
						<h3 className='text-xl font-bold text-primary'>Dulivi</h3>
					</a>

					{/* Botão hamburguer */}
					<button
						ref={buttonRef}
						onClick={() => setOpenMenu((prev) => !prev)}
						className='flex flex-col gap-1'
					>
						<span className='w-6 h-[3px] bg-black rounded-md'></span>
						<span className='w-6 h-[3px] bg-black rounded-md'></span>
						<span className='w-6 h-[3px] bg-black rounded-md'></span>
					</button>
				</div>

				{/* MENU MOBILE DROPDOWN */}
				<div
					ref={menuRef}
					className={`overflow-hidden transition-all duration-300
            ${openMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
				>
					<nav className='flex items-center justify-center py-4'>
						<ul className='flex flex-col items-center gap-3 font-medium'>
							<li>
								<a onClick={() => scrollIntoView('inicio')} className='cursor-pointer'>
									Início
								</a>
							</li>
							<li>
								<a
									onClick={() => scrollIntoView('funcionalidades')}
									className='cursor-pointer'
								>
									Funcionalidades
								</a>
							</li>
							<li>
								<a onClick={() => scrollIntoView('planos')} className='cursor-pointer'>
									Planos
								</a>
							</li>
							<li>
								<a onClick={() => scrollIntoView('dulivi')} className='cursor-pointer'>
									Sobre nós
								</a>
							</li>
							<li>
								<a onClick={() => scrollIntoView('inicio')} className='cursor-pointer'>
									Blog
								</a>
							</li>
						</ul>
					</nav>

					<aside className='flex flex-col items-center gap-4 pb-4 px-6 text-center'>
						<a
							onClick={() => scrollIntoView('contact-form')}
							className='bg-[#1d84ff] cursor-pointer px-4 py-2 rounded-md text-white font-semibold text-sm relative overflow-hidden w-full'
						>
							Teste Grátis
							<span className='absolute top-[-2px] right-[-2px] text-[11px] leading-3 text-black bg-white/80 py-0.5 px-1.5 rounded-[4px] montserrat'>
								15 dias
							</span>
						</a>
						<a
							href='https://painel.dulivi.com.br'
							target='_blank'
							onClick={() => setOpenMenu(false)}
							className='px-4 py-1.5 rounded-md font-semibold text-black flex items-center justify-center gap-1 border-[1px] border-border w-full'
						>
							<UserRound size={16} strokeWidth={3} />
							Login
						</a>
					</aside>
				</div>
			</header>
		</div>
	)
}
