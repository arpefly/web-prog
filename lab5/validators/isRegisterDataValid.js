const { isObjectHasLength, isObjectHasProps } = require("./utils/validators");

const isRegisterDataValid = (data) => {  
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["link", "title", "buttonText"]);
  
  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  isObjectHasProps(data.link, ["text", "href"]);
};

module.exports = isRegisterDataValid;
