const bcrypt = require('bcrypt');

const userDetailsModel = require('../../models/user-details-model');


signup =  (req, res) => {
    const { userName, userEmail, userPassword } = req.body;
    const saltRounds = 10;
    bcrypt.hash(userPassword, saltRounds)
        .then(async (hashed) => {
            const data = await userDetailsModel({
                userName,
                userEmail,
                userPassword: hashed
            });
            data.save()
        })
        .then(() => res.status(201).send('Successfully registered.'))
        .catch((error) => console.log(error));
}



module.exports = signup;