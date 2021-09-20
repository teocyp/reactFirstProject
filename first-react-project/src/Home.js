import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum..', author: 'teo', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum..', author: 'vikus', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum..', author: 'jenny', id: 3 }
    ])
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) =>
                blog.author === 'teo'
            )} title="Teo's Blogs" />
        </div>
    );
}

export default Home;
