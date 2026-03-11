import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CTA } from './components/CTA'
import './App.css'

function App() {
  return (
    <main className='container'>
      <Header />
      <Hero />
      <About />
      <CTA />
    </main>
  )
}

export default App
