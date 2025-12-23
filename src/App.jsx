import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HeroSlider from './components/HeroSlider'
import Features from './components/Features'
import WhyZeni from './components/WhyZeni'
import TargetUsers from './components/TargetUsers'
import HowItWorks from './components/HowItWorks'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1600)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Preloader visible={loading} />

            <div className="background-wrap home-bg-ai">
                <Header />
                <HeroSection />
                <HeroSlider />
                <Features />
                <WhyZeni />
                <TargetUsers />
                <HowItWorks />
                <ContactForm />
                <Footer />
            </div>
        </>
    )
}

export default App
