const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


//register
const registerUser = async(req, res)=>{
    const {username, email, password} = req.body;

    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occurred, please config",
        });
    }
}

//login
const login = async(req, res)=>{
    const {username, email, password} = req.body;

    try{
        const hash = await bcrypt.hash(password, 12);
        const newUser = new User({
            username, email, password:hash,
        });

        await newUser.save()
        res.status(200).json({
            success: true,
            message: "Registration Successful",
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occurred, please config",
        });
    }
}

//logout


//auth Middleware

module.exports = { registerUser };