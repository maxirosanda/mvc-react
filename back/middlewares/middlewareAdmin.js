exports.auth =(req,res,next)=>{
    if(req.session && req.session.usuario==="maxi" && req.session.admin)
    return next()
    else
    return res.sendStatus(401)
}