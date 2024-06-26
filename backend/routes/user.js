const express = require("express");
const z=require('zod');
const { Account, User } =require( '../db');
const JWT_SECRET =require( '../config');
const { authMiddleware } =require( '../middleware');
const jwt=require('jsonwebtoken')


const router=express.Router()


const signupSchema= z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string(),
})

router.post("/signup",async(req,res)=>{

    const data=req.body;

    const result = signupSchema.safeParse(data);

    if(!result.success){
        return res.status(411).json({
            message:"Incorrect inputs"
        })
    }

    const username=data.username;
    const firstName=data.firstName;
    const lastName=data.lastName;
    const password=data.password;

    const existingUser =await User.findOne({
        username:username
    })

    if(existingUser){
        return res.status(411).json({
            message:"Email already taken"
        })
    }

    const newUser=await User.create({
        username:username,
        firstName:firstName,
        lastName:lastName,
        password:password
    })

    console.log(newUser);

    await Account.create({
        userID:newUser._id,
        balance:(Math.random()+1)*10000
    })

    const token=jwt.sign({
        userID:newUser._id
    },JWT_SECRET)

    res.json({
        message:"User created successfully",
        token:token
    })

})

const signinSchema=z.object({
    username:z.string().email(),
    password:z.string()
})

router.post('/signin',async(req,res)=>{

    const data = req.body;

    const result=signinSchema.safeParse(data);

    if(!result.success){
        return res.status(411).json({
            message:"Incorrect input"
        })
    }

    const username=req.body.username;
    const password=req.body.password;

    const existingUser=await User.findOne({
        username,
        password
    })

    if(!existingUser){
        return res.status(411).json({
            message:"Error while logging in"
        })
    }

    const token=jwt.sign({
        userID:existingUser._id
    },JWT_SECRET)

    return res.json({
        token:token
    })

})

const updateScheme=z.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional()
})

router.put('/',authMiddleware,async(req,res)=>{
    const userID=req.userID;

    if(!updateScheme.safeParse(req.body).success){
        return res.status(411).json({
            message:"Error while updating information"
        })
    }

    // console.log(req.body);

    await User.updateOne({
        _id:userID
    },req.body)

    res.json({
        message:"Updated Successfully"
    })


})

router.get('/bulk',authMiddleware,async(req,res)=>{
    const filterParameter=req.query.filter||'';
    const userID=req.userID;
    const data=await User.find({
        $or:[
                {
                    firstName:{$regex:new RegExp(filterParameter,'i')}
                },
                {
                    lastName:{"$regex":new RegExp(filterParameter,'i')}
                }
            ]
        },
        'username firstName lastName _id')
    // console.log("Search Results\n", data);
    res.json({
        users:data.filter((user)=>user._id!=userID)
    })
})


module.exports=router