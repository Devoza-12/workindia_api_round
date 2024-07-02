require("dotenv").config();
const { getUserByUsername } = require("./login.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
 
module.exports = {
  login: (req, res) => {
    const body = req.body;
    getUserByUsername(body.username, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password",
          status_code: 401
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.KEY, {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          status: "Login successful",
          status_code: 200,
          access_token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
          status_code: 401
        });
      }
    });
  }
};