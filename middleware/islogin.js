 const isLogin=(req,res,next)=>{
    console.log(req.session,'<>>>>>>>>>> session')
     if(req.session.email){
       
         next()
     }
     else{
         res.redirect('/')
     }
 }

 module.exports=isLogin