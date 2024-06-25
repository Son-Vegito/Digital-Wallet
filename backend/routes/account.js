const { Account } = require( '../db');
const { authMiddleware } = require( '../middleware');
const z=require('zod')

const express=require('express');

const router=express.Router();

router.get('/balance',authMiddleware,async(req,res)=>{
    const account=await Account.findOne({
        userID:req.userID
    });

    res.json({
        balance:account.balance
    })
})

const transactionSchema=z.object({
    to:z.string().length(24),
    amount:z.number()
})

router.post('/transfer',authMiddleware, async(req,res)=>{


    if(!transactionSchema.safeParse(req.body).success){
        return res.status(411).json({
            message:"Incorrect input"
        })
    }

    const fromUserID=req.userID;

    const toUserID=req.body.to;
    const amount=req.body.amount;

    const fromAccount=await Account.findOne({
        userID:fromUserID
    })

    if(!fromAccount){
        res.status(400).json({
            message:"Invalid account"
        })
    }

    if(fromAccount.balance<amount){
        return res.status(400).json({
            message:"Insufficient balance"
        })
    }
    
    try{
        await Account.findOne({
            userID:toUserID
        })
    }catch(err){
        // console.log(err);
        return res.status(400).json({
            message:"Invalid account"
        })
    }

    await Account.findOneAndUpdate({
        userID:fromUserID
    },{$inc:{
        balance:-amount
    }})

    await Account.findOneAndUpdate({
        userID:toUserID
    },{
        $inc:{
            balance:amount
        }
    })

    res.json({
        message:"Transfer successful"
    })
})


module.exports=router