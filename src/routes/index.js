mealsController = require("../controllers/mealsController");

exports.appRoute = router => {
  router.get("/menu", mealsController.getMenuController);
};
