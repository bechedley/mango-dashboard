const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // If the user did not provide either email or password
    const { email, password } = req.body;
    console.log(email, password, !email || !password);
    // if (!email || !password) {
    //   return res
    //     .status(400)
    //     .send({ message: "Please provide both email and password" });
    // }

    const userData = await User.findOne({ where: { email } });
    console.log(userData, userData.checkPassword(password));

    // if (!userData || !userData.checkPassword(password)) {
    //   res
    //     .status(400)
    //     .json({ message: "Incorrect email or password, please try again" });
    //   return;
    // }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
