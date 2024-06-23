const jwt=require('jsonwebtoken');
const JWT_SECRET = require('./config');

function authMiddleware(req,res,next){

    const authHeader=req.headers.authorization;

    if(!authHeader||!authHeader.startsWith('Bearer ')){
        return res.sendStatus(403);
    }

    const token=authHeader.split(' ')[1];
    
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.userID=decoded.userID;
        next();
    }catch(err){
        return res.sendStatus(403);
    }
}

module.exports={
    authMiddleware,
}