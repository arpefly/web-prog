const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "footerData.json");

const getFooterDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать footerData.json");
  }
};

const postFooterDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    throw new Error("Не удалось записать footerData.json");
  }
};

module.exports = { getFooterDataModel, postFooterDataModel };
