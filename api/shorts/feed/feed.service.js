const pool = require("../../../config/database");
const moment = require("moment"); 

module.exports = {
  getShorts: callBack => {
    pool.query(
      `SELECT * FROM shorts ORDER BY publish_date DESC, upvote DESC`, [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};