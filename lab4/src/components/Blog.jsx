import { blogData } from "../mockData/blogData";


const createHeaderTemplate = (title) => {return <h1>{title}</h1>};

const createBlogPost = ({ image, blogInfo }) => {
    
    return (
        <div className="small_blog">
            <img src={image.src} alt={image.alt} />
            <div className="blog_info">
                <p className="blog_date p_small">{blogInfo.blogDate}</p>
                <h3>{blogInfo.title}</h3>
                <a href={blogInfo.link.href} className="read_article p_small">{blogInfo.link.text}</a>
            </div>
        </div>
    );
};

const Blog = () => {
    const { title, blogs } = blogData;
    const headerTemplate = createHeaderTemplate(title);
    return (<>
    
    {headerTemplate}
    <div className="blogs">
        <div className="big_blog">
            {createBlogPost(blogs[0])}
        </div>
        
        <div className="container_blog_small">
            {blogs.slice(1).map((blog, index) => (
                <div key={index}>
                {createBlogPost(blog)}
                </div>
            ))}
        </div>
    </div>
    
    </>)
}

export default Blog;