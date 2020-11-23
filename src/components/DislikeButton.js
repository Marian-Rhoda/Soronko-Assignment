import React, {useState} from 'react'

function DislikeButton(){

    const[count, setCount]= useState (0)

    const handleClick =() => setCount (count -1)

           return(
          <div>{
        
          <button className='button1' color onClick={handleClick}> Like {count}</button>
                  


          }

          </div>
      )

        }
            



export default DislikeButton;