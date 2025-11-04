const isRegisterDataValid = require("../validators/isRegisterDataValid");

const {
  getRegisterDataModel,
  postRegisterDataModel,
} = require("../model/files/registerDataModel");

const getRegisterData = (req, res, next) => {
  try {
    const data = getRegisterDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postRegisterData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    isRegisterDataValid(data);
    postRegisterDataModel(data);

    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getRegisterData, postRegisterData };
