const Users = require("../model/user_model")

//function for adding trip
exports.adduser =(req, res) => {
    const User = new Users(
        req.body)
        User.save().then(function( ){
            res.send("User has been added")
        }).catch(function(e){
            res.send(e)
        })
    }

    //function for Login Function
exports.login = async (req, res) => {
    try{
        const user = await Users.checkCrediantialsDb(req.body.email,
       req.body.password)
        const token = await user.generateAuthToken()
       res.send({user,token})
        }
        catch(e){
            res.status(400).send()
        }
    }

    