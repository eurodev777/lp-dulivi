import { Hero } from '@/components/Hero'
import { ContactForm } from '@/components/ContactForm'
import { Pricing } from '@/components/Pricing'
import { Results } from '@/components/Results'
import { Features } from '@/components/Features'
import { WhyChoose } from '@/components/WhyChoose'
import { Footer } from '@/components/Footer'
import Team from '@/components/Team'
import WhatsApp from '@/components/WhatsApp'
import HeaderMenu from '@/components/HeaderMenu'
import ContactPage from '@/components/ContactPage'

const Index = () => {
	return (
		<main className='min-h-screen relative'>
			<HeaderMenu />
			<Hero />
			<WhyChoose />
			<Results />
			<Features />
			<Pricing />
			<Team />
			<ContactPage />
			<Footer />
			<WhatsApp />
		</main>
	)
}

export default Index
