module.exports = function (options) {
    return function (req, res, next) {
      console.log("Afroj Ahmad external my middleware working");
      next();
    }
  }