import React, {useState} from 'react'

function LikeButton(){

    const[count, setCount]= useState (0)

    const[count1, setCount1]= useState (0)

    const handleClick =() => setCount (count +1)

    const handleClick1 =() => setCount1 (count1 -1)

           return(
          <div>{
        
          <button className='button' style={{color:"blue"}} onClick={handleClick}> Like {count}</button>


             
          }

          {<button className='button' style={{color:"red"}} onClick={handleClick1}> Dislike {count1}</button>}


      

          </div>
      )

        }
            



export default LikeButton;        