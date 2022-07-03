const express = require('express');
const users = require('../models/users');

const router = express.Router();


//save(create) user
router.post('/user/save', (req,res)=>{ 

    let newUser = new users(req.body);

    newUser.save((err)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"User saved successfully"
        });
    });
});


//get(read) users
router.get('/users',(req,res) =>{
    users.find().exec((err,users) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingUser:users
        });
    });
});




//update users
router.put('/users/update/:id', (req,res)=>{
    users.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,user)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//Delete users
router.delete('/users/delete/:id', (req,res)=>{
    users.findByIdAndRemove(req.params.id).exec ((err,deletepost)=>{ 

        if(err)return res.status (400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json ({
            message:"Delete Succesful",deletepost
        });
    });
});


module.exports = router;