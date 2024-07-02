const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO user(username, password, email, role) 
                VALUES (?, ?, ?, ?)`,
      [
        data.username,
        data.password,
        data.email,
        data.role
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
