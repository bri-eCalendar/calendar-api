const router = require("express").Router();

const oktaClient = require("../../config/oktaClient.js");

const { add } = require("./users-model");

// todo add docs
router.post("/register", (req, res) => {
  if (!req.body) return res.status(400).json("Needs a body");
  const newUser = {
    profile: {
      email: req.body.email,
      login: req.body.email,
    },
    credentials: {
      password: {
        value: req.body.password,
      },
    },
  };
  oktaClient
    .createUser(newUser)
    .then((res) => {
      res.status(201).json(res);
      // let user = {
      //   user_name: newUser.email,
      //   email: newUser.email
      // }
      // add(user)
      //   .then(() => res.status(201).json(res))
      //   .catch(err =>
      //     res.status(500).json({
      //       message: "Something went wrong in adding user to database.",
      //       error: err,
      //       error_message: err.message
      //     })
    })
    .catch((err) => {
      console.log(`error: ${err}\nerrorMessage: ${err.message}`);
      res.status(500);
      res.send(err.message);
    });
});
