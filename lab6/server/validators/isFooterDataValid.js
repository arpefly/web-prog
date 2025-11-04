const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["title", "buttonText", "footerLogo", "footerLinks"]);

  const { footerLogo, footerLogoImage, footerLinks } = data;

  // проверяем внутренний массив на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerLogo, ["image", "address", "comment"]);
  isObjectHasProps(footerLogoImage, ["src", "alt"]);
  isArrayHasLength(footerLinks);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  footerLinks.forEach((section) => {
    isObjectHasProps(section, ["title", "links"]);

    section.links.forEach((link) => {
      isObjectHasProps(link, ["href", "text"]);
    });
  });
};

module.exports = isFooterDataValid;
