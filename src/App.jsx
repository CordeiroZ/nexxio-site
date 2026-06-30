import Header from './components/Header'
import Hero from './components/Hero'
import Savings from './components/Savings'
import Screenshots from './components/Screenshots'
import Specialties from './components/Specialties'
import Features from './components/Features'
import Customize from './components/Customize'
import HowItWorks from './components/HowItWorks'
import Profiles from './components/Profiles'
import Security from './components/Security'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Savings />
        <Screenshots />
        <Specialties />
        <Features />
        <Customize />
        <HowItWorks />
        <Profiles />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
