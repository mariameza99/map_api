const jwt = require("jsonwebtoken");
const jwtConfig = require("../../libs/jwtConfig");
module.exports = (req, res, next) => {
  try {
    const usuario = jwt.verify(req.headers["authorization"], jwtConfig.privateKey);
    req.userData = usuario;
    next();
  } catch (err) {
    res.status(401).json({
      message: err,
    });
  }
};
