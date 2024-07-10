import {logo} from '../assets'

const Hero = () => {
  return (
   <header className='w-full flex
    justify-center items-center flex-col'>
    <nav className='flex justify-between
    items-center w-full mb-10 pt-7'>
        <a className='logo'href=''><img src={logo} alt = ""
        className="w-40 object-contain" /> </a>

    </nav>
    <h1 className='head_text'>
     Tinger your work <br className='max-md:hidden'/>
     <span className='blue_gradient'>Paste your link here</span>
    </h1>
    <h2 className='desc'>
        Here you can shortlist your webpage document 
        into crisp and clarity explanations
    </h2>
   </header>
  )
}

export default Hero