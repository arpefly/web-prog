const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "blogData.json");

const getBlogDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать blogData.json");
  }
};

const postBlogDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    throw new Error("Не удалось записать blogData.json");
  }
};

module.exports = { getBlogDataModel, postBlogDataModel };
