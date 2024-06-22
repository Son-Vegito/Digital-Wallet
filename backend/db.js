const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.1lyghhg.mongodb.net/paytm')

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    }
})

const User = mongoose.model("User",userSchema);

module.exports={
    User,
};