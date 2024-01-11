
import React, {useState} from 'react'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
import { UserData } from '../../StaticData/data'
function Review(){

    const [index,setIndex]=useState(0)
    const {name,job,image,text}=UserData[index]

const randomPerson=()=>{
    let random=Math.floor(Math.random()*UserData.length)
    if(random===index+1)
    {
        random=index+1
    }
    setIndex(random)
}



const prevPerson=()=>{
    if(index>0){

        setIndex(index-1)
      }else{
setIndex(UserData.length-1)
        
      }
    
}


const nextPerson=()=>{
      if(index>=UserData.length-1){

        setIndex(0)
      }else{

        setIndex(index+1)
      }
}

return(

    <>
<article className='review'>
<div className='img-container'>
<img  src={image} alt={name} className='person-img'/>
<span className='quote-icon'>
    <FaChevronRight/>
</span>
</div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>
<div className='button-container'>
<button onClick={prevPerson} className='prev-btn'><FaChevronLeft/> </button>


<button className='next-btn' onClick={nextPerson}><FaChevronRight/></button></div>
<button className='random-btn' onClick={randomPerson}>
    Random pickker
</button>

</article>
   
    </>
)
}

export default Review