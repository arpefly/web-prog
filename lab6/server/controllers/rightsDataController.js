const isRightsDataValid = require("../validators/isRightsDataValid");

const {
  getRightsDataModel,
  postRightsDataModel,
} = require("../model/files/rightsDataModel");

const getRightsData = (req, res, next) => {
  try {
    const data = getRightsDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postRightsData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    isRightsDataValid(data);
    postRightsDataModel(data);

    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getRightsData, postRightsData };
