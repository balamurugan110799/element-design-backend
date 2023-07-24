const user = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.Register = async (req, res) => {
    try {
        var emailExit = await user.findOne({ email: req.body.email })
        if (emailExit) {
            return res.status(400).send("Email already Exist")
        }

        var hash = await bcrypt.hash(req.body.password, 10)

        const newUser = await new user({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        var data = await newUser.save()
        res.json(data)


    } catch (err) {
      return  res.status(400).json(err)
    }
}

exports.Login = async (req,res) =>{
    var emailExist = await user.findOne({email: req.body.email})
    if(!emailExist){
        return res.status(500).send({email:"Email not register"})
    }

    var userPassword = await bcrypt.compare(req.body.password ,emailExist.password )
    if(!userPassword){
       return res.status(500).send({password:"Password not correct"})
    }

    var userToken = jwt.sign({eamil:req.body.email, username: req.body.username}, "element-design" )
    res.header("auth",userToken).send(userToken)
}