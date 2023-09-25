const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.json({ dat: "", msg: "success" });
});

module.exports = router;
