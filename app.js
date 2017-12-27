const express =  require('express');
const app = express();
const route = express.Route()
const bodyParser = require('body-parser')
const Model = require('./models')
const bcrypt = require('bcrypt')
//const Auth = require('./helper/auth')
const session = require('express-session')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('views','./views');
app.set('view engine','ejs');

let routePlayer = require('./routes/r_players')
let routeQuest =  require('./routes/r_quest')

app.use('/players',routePlayer)
app.use('/quests',routeQuest)

app.use(express.static(__dirname + '/public'));


function checkLogin(res,req,next){
    if(req.body.username == "fadil"){
        next()
    }else{
        res.redirect('/login')
    }
}




app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/jobs',(req,res)=>{
    res.render('jobs')
})

app.get('/quests',(req,res)=>{
    res.render('quest')
})

app.get('/invite_player',(req,res)=>{
    res.render('invite_player')
})


app.listen(3000,(err)=>{
    if(!err){
        console.log("every things clear sir!")
    }
    else {
        console.log(err)
    }
})