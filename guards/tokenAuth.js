const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
require("dotenv").config();

// verify access token
function tokenAuth(req, res, next) {
  const token = req.headers["authorization"].replace(/^Bearer\s/, "");

  if (!token) {
    res.status(401).send({ message: "please provide an access token" });
  } else {
    jwt.verify(token, secretKey, function (err, decoded) {
      if (err) res.status(401).send({ message: err.message });
      else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
}

module.exports = tokenAuth;