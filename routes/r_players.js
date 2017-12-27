const express = require('express')
const router  = express.Router()
const Model = require('../models')

router.get('/',(req,res)=>{
    Model.Player.findAll()
     .then(players=>{
         res.render('player',{players : players , err : '', title : 'Players', page : 'Players'})
     })
})

router.get('/delete/:id',(req,res)=>{
    Model.Player.destroy({where : {id : req.params.id}})
    .then(()=>{
      res.redirect('/nplayers')
    })
})

router.post('/',(req,res)=>{
    Model.Player.create({
        name: req.body.name,
        level: req.body.level,
        job: req.body.job
    })
     .then(()=>{
         res.redirect('players')
     })
     .catch(err=>{
         console.log(err)
     })
})

module.exports = router;