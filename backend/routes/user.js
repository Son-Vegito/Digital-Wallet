const express = require("express");
import {z} from 'zod';
import { User } from '../db';
import JWT_SECRET from '../config';
import { authMiddleware } from '../middleware';
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

const updateScheme=s.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional()
})

User.put('/',authMiddleware,async(req,res)=>{
    const userID=req.userID;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;

    if(!updateScheme.safeParse(req.body).success){
        return res.status(411).json({
            message:"Error while updating information"
        })
    }

    await User.updateOne({
        _id:userID
    },req.body)

    res.json({
        message:"Updated Successfully"
    })


})

router.get('/bulk',async(req,res)=>{
    const filterParameter=req.query.filter||'';

    const data=await User.find({
        $or:[{firstName:{"$regex":filterParameter}},{lastName:{"$regex":filterParameter}}]},'username firstName lastName _id')
    console.log("Search Results\n", data);
    res.json({
        users:data
    })
})


export default router;