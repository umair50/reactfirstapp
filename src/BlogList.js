import { Link } from "react-router-dom";
const BlogList = ({ blogs, titles }) => {
  return (
    <div className="blog-list">
      <h2>{titles}</h2>
      {blogs.map((blog) => (
        <div className="blo-prevew" key={blog.id}>
          <div className="blog-preview">
            <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title}</h2>
            <p>{blog.body}</p>
            <p>Written By {blog.author}</p>
            </Link>
        
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
