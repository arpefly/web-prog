const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "womanData.json");

const getWomanDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать womanData.json");
  }
};

const postWomanDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    throw new Error("Не удалось записать womanData.json");
  }
};

module.exports = { getWomanDataModel, postWomanDataModel };
