const router = require("express").Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await Controller.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("email or password missing");
    const result = await Controller.login(email, password);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
