const { isObjectHasProps } = require("./utils/validators");

const isRightsDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["title"]);
};

module.exports = isRightsDataValid;
