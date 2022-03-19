import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('usman');
    const history = useHistory();

    
    //const handleSubmit =(event) =>{
        //console.log("the value in the event would be ",event);
      //  event.preventDefault();
        
    //}

    return ( 
       <div className="create-new-blog">
           <h2>Add Blog</h2>
           <form onSubmit={(event)=>{
               console.log("",event);
               event.preventDefault();
               const blog = {title,author,body};
               console.log(blog);
               fetch('http://localhost:8000/blogs',{
                   method: 'POST',
                   headers: {'Content-Type':'application/json'},
                   body: JSON.stringify(blog)
                    }).then((resp)=>{
                        
                        history.push('/');
                    })


           }}>
               <label>Add Title:</label>
               <input type="text" required value={title} onChange= {(e) => setTitle(e.target.value)} />
               <label>Add Body:</label>
               <textarea required value={body} onChange = {(e) => setBody(e.target.value)}></textarea>
               <label>Author:</label>
               <select  value={author} onChange = {(e) => setAuthor(e.target.value)}>
               <option value='umair'>Umair</option>
               <option value='Awais'>Awais</option>
               </select>
               <button>Submit</button>
           </form>
          
       </div> 
       
    );
}
 
export default Create ;
