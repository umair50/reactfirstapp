import { useState, useEffect } from "react";
const useFetch = (url) => {

  const [data,setData ] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMessage,setError] = useState(null);
  


    useEffect(() =>{
      const abortCon = new AbortController();
        setTimeout(()=>{
 
         fetch(url,{signal: abortCon.signal})
         .then(resp => {
           if(!resp.ok){
             throw Error('Could Not Find The Resources ');
           }
 
           return resp.json();
         })
         .then(data => {   
             setData(data);
             setIsPending(false);
             setError(null);
         })
         .catch(err =>{
           
           if(err.signal === 'AbortError'){
             console.log("Fetch Aborted");
           }else{
            setIsPending(false);
            setError(err.message);

           }
           
         })
     },500); return () => abortCon.abort();
     },[url]) 
     return {data,isPending,errorMessage}
     

}
export default useFetch;