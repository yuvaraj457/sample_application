require('dotenv').config();
const jwt = require('jsonwebtoken');

const userDetailsModel = require('../../models/user-details-model');


const user = (req, res) => {
  const token = req.header('auth-token');

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    userDetailsModel.findOne({ _id: user._id })
      .then((response) => res.status(200).send(response))
      .catch((error) => console.log(error));
  }
  catch {
    return res.status(401).send("Invalid Token");
  }
}

module.exports = user;