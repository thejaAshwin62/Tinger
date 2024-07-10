import React from 'react'
import {motion} from 'framer-motion';
 const about = () => {
  return (
<>
      <motion.div className=''>
       <h1 className='intm'>
       <p className='int'>About the site</p>
        <h1 className='int2'>
        This is an API which extracts news/article body from a URL and uses GPT to summarize (and optionally translate) the article content. Useful for text mining purposes. Leverages powerful and flexible web scraping engine
         (ScrapeNinja.net) with high-quality rotating proxies under the hood.
        </h1>
        </h1> 
       <h1 className='frm'>
       <h2 className='form'>
        -Developed By- 
        </h2>

        <h2 className='form2'>
          <span>O D I N </span> 
        </h2>

       </h1>
       

<div className='socm'>
<div >

       <a className="social" href='https://github.com/thejaAshwin62?tab=repositories' > <h1 className='git'>
        <i className="fa-brands fa-github"></i> GitHub </h1> </a>
       </div>

       <div>
        <a  className='social2' href='https://www.instagram.com/in_justice_don_/?hl=en'> <h1 className='insta'>   
        <i className="fa-brands fa-instagram"></i> Instagram </h1></a> 
      
       </div>
      
</div>
      

      </motion.div>
    </>
  )
}
export default about
