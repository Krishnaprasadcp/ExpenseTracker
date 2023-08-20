
function verifyToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null){
        return res.status(401).json({message:'Please enter the correct credentials'});
    }
    req.token = token;
    next();
}

module.export={
    verifyToken
}