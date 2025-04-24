import { useState } from 'react'
import AgeCalculator from './components/AgeCalculator'
import Footer from './components/Footer'
import hourglassBackground from './assets/blue-hourglass-wallpaper-1920x1272.jpg'

function App() {
  const [theme] = useState('light')

  return (
    <div 
      className={`min-h-screen flex flex-col relative ${theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'}`}
    >
      {/* Background image with reduced opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-65"
        style={{ backgroundImage: `url(${hourglassBackground})` }}
      ></div>
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 relative z-10">
        <AgeCalculator />
      </main>
      <Footer />
    </div>
  )
}

export default App