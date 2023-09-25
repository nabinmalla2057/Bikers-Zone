const router = require("express").Router();
const apiRouter = require("./routes.api");

router.use("/api/v1", apiRouter);

router.all("*", (req, res, next) => {
  try {
    res.status(404).json({ data: "", msg: "Routes not found" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
