const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.1lyghhg.mongodb.net/paytm')

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    username:{
        type:String,
        require:true,
        trim:true
    }
})

const accountSchema= new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        trim:true
    },
    balance:{
        type:Number,
        required:true,
        trim:true
    }
})

const User = mongoose.model("User",userSchema);
const Account=mongoose.model("Account",accountSchema)


module.exports={
    User,
    Account
};