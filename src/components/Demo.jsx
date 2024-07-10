import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

import { useSpeechSynthesis } from "react-speech-kit";



const Demo = () => {
const {speak} = useSpeechSynthesis();

const [value,setValue] = useState("")

    const [article, setArticle]=useState({
        url:"",
        summary:"",
    });
    

    const[allArticles ,setAllArticles]= useState([]);
    const [copied,setCopied] = useState("");


    const [getSummary,{error,isFetching}] = 
    useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromLocalStroage = JSON.parse(
            localStorage.getItem('articles')
        )
       if(articlesFromLocalStroage){
        setAllArticles(articlesFromLocalStroage)
       }
       
       },[]);


    const handleSubmit = async (e) => {
        e.preventDefault();
      const {data} = await getSummary({ articleUrl :
    article.url});

if(data?.summary) {
    const newArticle = {...article,summary: data.
    summary};
    const updatedAllArticles = [newArticle,...allArticles]

    setArticle(newArticle);
    setAllArticles(updatedAllArticles)
    localStorage.setItem('articles',JSON.stringify(updatedAllArticles))

}

}

const handleCopy=(copyUrl) => {

    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false),3000)
}


  return (
    
   <section className="mt-20 w-screen max-w-xl">
     <div className="flex flex-col w-full gap-1">
     <form className="relative flex justify-center
     items-center"
     onSubmit={handleSubmit}
     >
        <img src={linkIcon}
        alt="link_icon"
        className="absolute left-0 my-2 ml-3 w-5"
         />

         <input
         type="url"
         placeholder="Paste your Link"
         value={article.url}
         onChange={(e) => setArticle({...
        article, url:e.target.value})}
         required
         className="url_input peer"

         />

         <button
         type="submit"
         className="submit_btn peer-focus:border-grey-1000
         peer-focus:text-gray-1000"
         >
            ⎇

         </button>
     </form>
     {/*history*/}
     <div className="flex flex-col gap-1 max-h-60
     overflow-y-auto">
     {allArticles.map((item,index) =>(
        <div 
        key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'
              >
              <div className='copy_btn'  onClick={() => handleCopy(item.url)}>
                <img
                    src={copied === item.url ? tick : copy}
                    alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className='w-[50%] h-[70%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>

        </div>
     ))}
     </div>
     </div>
     <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-white text-center'>
           That wasn't supposed to occur, though....
            <br />
            <span className='font-satoshi font-normal text-gray-300'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-white text-xl'>
              Shortlisted <span className='blue_gradient'>Document</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      
       
        
      </div>


      <div >
       <h1 className=""></h1>
   
        <h1 value={article.summary} onChange={(e) => setValue(e.target.article.summary)}></h1>
  
       <button  type="submit" className="but" onClick={() => speak({text:article.summary} ) }>
           Read the Document
        </button>
        <div/>


      <div className="dbut">
        <button   type="submit" className="but2" onClick={() =>speechSynthesis.pause()}>
          Pause Reading 
        </button>

        <button  type="submit" className="but3" onClick={() =>speechSynthesis.resume()}>
          Resume Reading
        </button>
       </div>
      

    </div>

   </section>
  )
}

export default Demo