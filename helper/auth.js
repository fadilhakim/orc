function checkLogin(res,req,next){
    if(req.session.loggedIn){
        next()
    }else{
        res.redirect('/login')
    }
}

module.exports = {
    checkLogin : checkLogin
}