const jwt = require('jsonwebtoken');

const userDetailsModel = require('../../models/user-details-model');


const checkOut = (req, res) => {
  const { userName, phoneNumber, email, billingAddress } = req.body;
  const token = req.header('auth-token');

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
      userDetailsModel.findByIdAndUpdate(
        { _id: user._id },
        {
          $addToSet: {
            billingAddress: {
              userName,
              email,
              phoneNumber,
              billingAddress
            }
          }
        }
      ).then(() => res.status(201).send('product added successfully'))
        .catch(() => res.status(403).send('Unable to add address'));
  }
  catch {
    return res.status(401).send("Invalid Token");
  }
}



const getBillingAddress = (req, res) => {
  const token = req.header('auth-token');

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
      userDetailsModel.findOne({ _id: user._id }).select('billingAddress -_id')
        .then((data) => res.status(200).send(data.billingAddress))
        .catch((error) => res.status(403).send("Unable to get billing address"));
    }
  catch {
    return res.status(401).send("Invalid Token");
  }
}



const removeBillingAddress = (req, res) => {
  const token = req.header('auth-token');
  const billingAddress = req.query.billingAddress;

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
      userDetailsModel.updateMany(
        { _id: user._id },
        {
          $pull:
          {
            billingAddress: { billingAddress }
          },

        }
      ).then((response) => res.status(204).send(response))
        .catch((error) => res.status(403).send("Unable to remove billing address"));
    }
  catch {
    return res.status(401).send("Invalid Token");
  }
}

module.exports = { checkOut, getBillingAddress, removeBillingAddress }