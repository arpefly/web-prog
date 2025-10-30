const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(
  __dirname,
  "..",
  "..",
  "db",
  "files",
  "registerData.json"
);

const getRegisterDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    throw new Error("Не удалось прочитать registerData.json");
  }
};

const postRegisterDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    throw new Error("Не удалось записать registerData.json");
  }
};

module.exports = { getRegisterDataModel, postRegisterDataModel };
