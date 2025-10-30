const { isObjectHasProps } = require("./utils/validators");

const isWomanDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["illustration", "womanText"]);

  const { illustration, womanText, womanTextLink} = data
  
  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  isObjectHasProps(illustration, ["src", "alt"]);  
  isObjectHasProps(womanText, ["link", "title", "description"]);  
  isObjectHasProps(womanTextLink, ["text", "href"]);
};

module.exports = isWomanDataValid;
