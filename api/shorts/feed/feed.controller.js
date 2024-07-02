const { getShorts } = require("./feed.service");
  
  module.exports = {
    getShorts: (req, res) => {
      getShorts((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    }
  };