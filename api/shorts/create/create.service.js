const pool = require("../../../config/database");
const moment = require("moment"); 

module.exports = {
  create: (data, callBack) => {
    const formattedDate = moment(data.publish_date).format('YYYY-MM-DD HH:mm:ss');

    pool.query(
      `INSERT INTO shorts (category, title, author, publish_date, content, actual_content_link, image, upvote, downvote)
VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        data.category, 
        data.title, 
        data.author, 
        formattedDate, 
        data.content, 
        data.actual_content_link, 
        data.image, 
        data.votes.upvote, 
        data.votes.downvote
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
