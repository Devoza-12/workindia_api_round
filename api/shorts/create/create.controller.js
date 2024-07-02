const { create } = require("./create.service");
const { hashSync, genSaltSync } = require("bcrypt");

module.exports = {
  createShorts: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        shorts_id: results.insertId,
        message: "shorts successfully created",
        "status_code": 200
      });
    });
  }
};
