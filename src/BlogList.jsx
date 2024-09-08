


const BlogList = ({blogs, title, handleDelete}) => {

    console.log(blogs);

    return ( 
       <div>
        {title}
        {blogs.map(
          blog => (
            <div className="preview" key={blog.id}>
              {blog.title}
              <button onClick={() => handleDelete(blog.id)}Delete Blog></button>
            </div>
          ))};
       </div>
    );
}
 
export default BlogList;