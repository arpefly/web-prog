import { blogData } from "../mockData/blogData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";


const createHeaderTemplate = (title) => {return <h1 style={{ whiteSpace: 'pre-line' }}>{title}</h1>};

const createBlogPost = ({ image, blogInfo }) => {
    const href = blogInfo.link.href === "#" ? "/login" : blogInfo.link.href;
    return (
        <div className="small_blog">
            <img src={image.src} alt={image.alt} />
            <div className="blog_info">
                <p className="blog_date p_small">{blogInfo.blogDate}</p>
                <h3>{blogInfo.title}</h3>
                <a href={href} className="read_article p_small">{blogInfo.link.text}</a>
            </div>
        </div>
    );
};

const Blog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: {
            method: "GET",
        },
    });

    if (isLoading) return <Preloader />;
    
    const renderedData = data || blogData;
    const { title, blogs } = renderedData;
    const headerTemplate = createHeaderTemplate(title);

    if (isError) {
        console.error("Ошибка загрузки данных blog:", error);
    }

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