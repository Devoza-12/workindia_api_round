const pool = require("../../config/database");

module.exports = {
  getUserByUsername: (username, callBack) => {
    pool.query(
      `select * from user where username = ?`,
      [username],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};