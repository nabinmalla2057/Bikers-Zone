const router = require("express").Router();
const userRouter = require("../modules/users/user.api");

router.get("/", (req, res, next) => {
  res.json({ dat: "", msg: "success" });
});
router.use("/users", userRouter);
router.all("*", (req, res, next) => {
  try {
    res.status(404).json({ data: "", msg: "Routes not found" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
