import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
  const blogData = [
    {title: "My new website", body: "random text", author: "john", id: 1},
    {title: "My new website2", body: "random text", author: "brown", id: 2},
    {title: "My new website3", body: "random text", author: "john", id: 3}
  ];
const [blogs, setData] = useState(blogData);

const handleDelete =  (id) => {
  const newBlogs = blogs.filter(blog => blog.id === 1);
  setData(newBlogs);
}

  return (
    <div className="data">
      <h1>My Blog</h1>
      <BlogList blogs={blogs} title="All blogs..." handleDelete={handleDelete} />
    
    </div>
  );
};


export default Home;