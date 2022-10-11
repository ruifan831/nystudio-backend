const {IphoneSubscribe} = require('../models/iphoneSubscribe');
const express = require('express');
const { application } = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const subscribeList = await IphoneSubscribe.find()
        if (!subscribeList){
            res.status(500).json({
                success:false
            })
        }
        res.send(subscribeList)
    }catch (err){
        res.status(500).json({
            success:err
        })
        
    }
        
})


router.post('/', async (req, res) => {
    console.log(req.body)
    let iphoneSubscribe = new IphoneSubscribe({
        model: req.body.model,
        size: req.body.size,
        color: req.body.color,
        post: req.body.post,
        email: req.body.email,
    })
    iphoneSubscribe = await iphoneSubscribe.save()
    if (!iphoneSubscribe){
        return res.status(404).send('the subscribe cannot be created!')
    }

    res.status(200).send(iphoneSubscribe)
    
})

router.get('/unsubscribe',async (req,res)=>{
    var iphonSubscribe = await IphoneSubscribe.findByIdAndRemove(req.query.id)
    res.send("Unsubscribed!")
})

module.exports = router;