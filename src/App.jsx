import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CTA } from './components/CTA'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the number of pixels the document is currently scrolled vertically
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Calculate the total scrollable height of the document
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);

  },[]);

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      >
      </div>

      {/* Main Content */}
      <main className='container'>
        <Hero />
        <About />
        <CTA />
      </main>
    </>
  )
}

export default App
