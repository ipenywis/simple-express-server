const pageControllers = require("../controllers/pageController");
const mealsController = require("../controllers/mealsController");

exports.appRoute = router => {
  //Main Home Page
  router.get("/", pageControllers.mainPageController);

  //Menu
  router.get("/menu", mealsController.getMenuController);

  //Meal
  router.get("/meal/:name", mealsController.getMealController);
};
