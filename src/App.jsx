import Hero from './components/Hero';
import Demo from './components/Demo';
import About from './components/about';
import './App.css'
const App = () => {
  return (
   <main>
    <div className='main'>
       <div className='gradient'/>
    </div>

    <div className='app'>
      <Hero />
      <Demo />
    </div>
     <div className='app2'>
        <About/>
     </div>
     </main>
  )
}

export default App