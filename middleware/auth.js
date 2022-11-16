const User=require('../model1/user');
const jwt=require('jsonwebtoken');


exports.authentication=async(req,res,next)=>{
    try{
      const token=req.header('Authentication');
      const user=jwt.verify(token,process.env.TOKEN_SECRET);
      User.findByPk(user.expenseuserId)
      .then(user=>{
  req.user=user;
  next();
      }).catch(err=>{throw new Error(err)});
    }catch(err){console.log(err)
   return  res.status(401).json({success:false})
    }
}

