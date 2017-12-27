const express = require('express')
const router  = express.Router()
const Model = require('../models')

router.get('/',(req,res)=>{
    Model.Quest.findAll({
        include: [Model.Player]
    })
     .then(quests=>{
         res.render('quest',{quests : quests , err : '', title : 'Quests', page : 'Quests'})
    })
})

router.post('/',(req,res)=>{
    Model.Quest.create({
        quest: req.body.quest,
        level: req.body.level,
        detail: req.body.detail
    })
     .then(()=>{
         res.redirect('quests')
     })
     .catch(err=>{
         console.log(err)
     })
})

router.post('/:id/invite_players',(req,res)=>{
    Model.Quest.findAll({where : {questId : req.params.id }})
     .then(()=>{
         res.render('invite_player',{players:players,err:"",title:"title"})
     })
     .catch(err=>{
         console.log(err)
     })
})

module.exports = router;