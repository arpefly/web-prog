const {
  isArrayHasLength,
  isObjectHasProps
} = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["title", "blogs"]);
  
  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  const arrayLength = isArrayHasLength({ blogs });
  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина = 0");

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  blogs.forEach((blog) => {
    isObjectHasProps(blog, ["image", "blogInfo"]);    
    isObjectHasProps(blog.image, ["src", "alt"]);
    isObjectHasProps(blog.blogInfo, ["blogDate", "title", "link"]);    
    isObjectHasProps(blog.blogInfo.link, ["text", "href"]);
  });
};

module.exports = isBlogDataValid;
