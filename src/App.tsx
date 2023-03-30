import './index.css'
import Footer from './components/footer'
import Fruits from './components/fruits'
import Gallery from './components/gallery'
import Header from './components/header'
import Hero from './components/hero'
import ReusableSection from './components/reusableSection'
import Testimonials from './components/testimonials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReusableSection transform={true} />
        <ReusableSection />
        <Fruits />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
