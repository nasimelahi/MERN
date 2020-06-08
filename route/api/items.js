const express = require('express');
const router = express.Router();

//item model
const item = require('../../model/item.')
// @toute GET api/items
// @desc Get all items
// @access public


router.get('/',(req,res) => {
    // Geting all item from mongodb
     item.find()
     .sort({ date: -1 })
     .then((items) => res.json(items))
});

// @toute GET api/items
// @desc create a post
// @access public


router.post('/',(req,res) => {
    // Geting all item from mongodb
    let newItem = new item({
        name:req.body.name
    });

    if(!newItem.name){
       return res.status(400).json({ "msg" : "Please give minimum one item name"})
    }else {
        item.findOne({ name: req.body.name})
        .then((item) => {
            if(item){
                return res.status(400).json({ "msg" : `${req.body.name}` +" is all ready in List"})
                
            }
        });
    }
    newItem.save()
    .then(item => res.json(item));
   
    

    
});

// @toute GET api/items
// @desc Get all items
// @access public


router.delete('/:id',(req,res) => {
    // Geting all item from mongodb
     item.findById(req.params.id)
     .then((item) => item.remove().then(() => res.status(200).json({ success: true})))
     .catch((error) => res.status(400).json({ success:false}));
});

//update item
router.put('/:id',(req,res) => {
    item.updateOne(
        {_id: req.params.id},
        {"name":req.body.name}
    )
    .then(() => res.status(200).json({ "msg":"Item name updated"}))
    .catch((error) => console.log(error));
     
});



module.exports = router;