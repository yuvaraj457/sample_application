require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userDetailsModel = require('../../models/user-details-model');


const login = async(req,res) => {
    const {email, password} = req.body;
    const data = await userDetailsModel.findOne({userEmail:email});
    if(data){
         bcrypt.compare(password,data.userPassword)
        .then((result) => {
                if(result){
                    const token = jwt.sign({_id:data._id},process.env.TOKEN_SECRET);
                    res.status(200).send({token:token});
                }
                else{
                    res.status(401).send("Invalid email or password.");
                }
        })
        .catch((error) => console.log(error));
    }
    else{
        res.status(401).send("Invalid email or password.");
    } 
}

module.exports = login;