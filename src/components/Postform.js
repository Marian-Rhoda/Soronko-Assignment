import React, {useState} from 'react';
import '../style/Poststyle.css';
import {v1 as uuid} from 'uuid';


function Post(){
    const [title, setTitle]= useState('')
    const [content, setContent]= useState('')
    const [author, setAuthor]= useState('')
    const [date, setDate]= useState('')
    const [post, setPost]= useState([])
    

    const handleTitleInput =(event) => {
        setTitle(event.target.value)
    }
    const handleContentInput =(event) => {
        setContent(event.target.value)
    }

    const handleAuthorInput =(event) => {
      setAuthor(event.target.value)
  }
  
    const handleDateInput =(event) => {
      setDate(event.target.value)
}

    const handlePost =(event) => {
      event.preventDefault();
        setPost([...post,
        {
          id: uuid(),
          title: title,
          content: content,
          author: author,
          date: date
        }
      ]);
    }

    
        return(
    
            <div>
    
                   <form className='post-form'>
                     <label>
                        Title:
                     </label>
                     <input type= "text" name= "title" value={title} onChange={handleTitleInput} />
                     <br></br>

                     <label>
                        Content:
                     </label>
                     <input type= "text" className= "content" value={content} onChange={handleContentInput} />
                     <br></br>

                     <label>
                        Author:
                     </label>
                     <input type= "text" name= "author" value={author} onChange={(e) => handleAuthorInput(e)} />

                     <label>
                        Date:
                     </label>
                     <input type= "date" name= "date" value={date} onChange={handleDateInput} />
                     <br></br>
                     <input className= 'submit-button' type='submit' onClick={handlePost} />
    
                   </form>  
                   <div className="allpost">
                   <h2>All Posts</h2>  
                   <ul>
                     {post.map((post) => (
                       <li className= 'post-item' key={post.id}>
                         {post.title} <br></br>{post.author}<br></br> {post.content} <br></br>{post.date}
                       </li>
                     ))}
                       </ul> 
                       </div>         
    
    
    
            </div>
            
        );
    
        
    
        
    }
    
          
    export default Post;          