const jwt = require("jsonwebtoken");
const jwtConfig = require("../../libs/jwtConfig");

module.exports = (req, res, next) => {
  try {
    console.log(req.headers);
    const user = jwt.verify(req.headers["authorization"], jwtConfig.privateKey);
    req.userData = user;
    next();
  } catch (err) {
    res.status(401).json({
      message: err,
    });
    console.log("token error");
  }
};
