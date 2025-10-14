const createHeaderTemplate = (title) => `<h1>${title}</h1>`;

const createBlogPost = ({ image, blogInfo }) => {
    return `
        <div class="small_blog">
            <img src="${image.src}" alt="${image.alt}">
            <div class="blog_info">
                <p class="blog_date p_small">${blogInfo.blogDate}</p>
                <h3>${blogInfo.title}</h3>
                <a href="${blogInfo.link.href}" class="read_article p_small">${blogInfo.link.text}</a>
            </div>
        </div>
    `;
};

export const blogTemplate = ({
    title,
    blogs
}) => {
    const headerTemplate = createHeaderTemplate(title);

    return `
        ${headerTemplate}

        <div class="blogs">
            <div class="big_blog">
                ${createBlogPost(blogs[0])}
            </div>
        
            <div class="container_blog_small">
                ${blogs.filter((_, index) => index > 0).map((blogs) => createBlogPost(blogs)).join("")}
            </div>
        </div>
    `;
};
