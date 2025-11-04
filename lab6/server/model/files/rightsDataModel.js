const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "rightsData.json");

const getRightsDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать rightsData.json");
  }
};

const postRightsDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    throw new Error("Не удалось записать rightsData.json");
  }
};

module.exports = { getRightsDataModel, postRightsDataModel };
