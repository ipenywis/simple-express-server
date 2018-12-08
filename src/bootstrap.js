const routes = require("./routes");

module.exports = (app, router) => {
  routes.appRoute(router);
};
