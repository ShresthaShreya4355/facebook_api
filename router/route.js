const express = require('express');
//const bodyparser = require('body-parser');
const User = require('../model/task');
const router = new express.Router();
const auth = require('../middleware/auth');

//const app = express();
//app.use(User);

router.post("/login", async (req,res)=>{
    const user = await User.checkCrediantialDb(req.body.name, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user, token})
})

router.get("/users",auth,(req,res)=>{
    User.find().then(function(user_data){
        res.send(user_data);
    }).catch(function(e){
        res.send(e);
    })

});

router.post("/upload",(req,res)=>{
    const data = new User(req.body);
    data.save();
    res.send(data)
});

router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id).then(function(){
        res.send("deleted");
    }).catch(function(e){
        res.send(e);
    })
});

router.put('/update/:id',(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        res.send("Updated");
    }).catch(function(e){
        res.send(e);
    })
});

router.get('/admin_dashboard', auth,(req,res)=>{
    user_type = req.user_type
    if(user_type=="admin"){
        res.send("hello Admin")
    }
    else{
    res.send("please authentication")
    }
})

router.get('/student_dashboard', auth,(req,res)=>{
    user_type = req.user_type
    if(user_type=="student"){
        res.send("hello student")
    }
    else{
    res.send("please authentication")
    }
})
module.exports = router;