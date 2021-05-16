var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function (req, res) {
  res.render("home");
});

//auth routes
router.get("/register", function (req, res) {
  res.render("register");
});

router.post("/register", function (req, res) {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
      }
      passport.authenticate("local")(req, res, function () {
        console.log("success");
      });
    }
  );
});
// router.route("/register").post((req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const newUser = new User({ username, password });

//   newUser
//     .save()
//     .then(() => res.json("User added!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.status(200).json({
    message: "we in boys",
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
