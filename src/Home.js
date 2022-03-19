import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  
  const {data:blogs, isPending, errorMessage} = useFetch("http://localhost:8000/blogs");

  // for delete the blog the we use the function pass this function on the props
 
  

//  useEffect state trigger on every time when the DOM is render
// so we us

    
    
  return (
    <div className="home-page">
      {errorMessage && <div>{errorMessage}</div>}
      { isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} titles= "All Blog" />}
      
      
 

    </div>
  );
};

export default Home;
