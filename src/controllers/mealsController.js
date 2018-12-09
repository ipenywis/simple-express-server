const mealModel = require("../models/mealModel");

exports.getMenuController = (req, res, next) => {
  const meals = mealModel.getMeals();

  res.render("menu", { meals });
};
