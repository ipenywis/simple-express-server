const mealModel = require("../models/mealModel");

exports.getMenuController = (req, res, next) => {
  const menu = mealModel.getListOfMeals();

  return res.render("menu", { mealsMenu: menu });
};

exports.getMealController = (req, res, next) => {
  const mealName = req.params.name;
  const meal = mealModel.getMeal(mealName);
  return res.json({ meal });
};
