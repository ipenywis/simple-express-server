exports.mainPageController = (req, res, next) => {
  res.render("index", { framework: "React" });
};
