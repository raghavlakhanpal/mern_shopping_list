const express = require('express');
const router = express.Router();

//Bringing in the model
const Item=require('../../models/Item');

// Route    GET /api/items
// Desc     Get All Items
// Access   Public
router.get('/',(req,res)=>{
    Item
    .find()
    .sort({date: -1})
    .then(items => res.json(items))
});

// Route    POST /api/items
// Desc     Create an Item
// Access   Public
router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });

newItem
    .save()
    .then(item => res.json(item));

});

// Route    DELETE /api/items/:id
// Desc     Delete an Item
// Access   Public
router.delete('/:id',(req,res)=>{
    Item
        .findById(req.params.id)
        .then(item => item
                        .remove()
                        .then(() => res.json({success:true})))
        .catch(err => res
                        .status(404)
                        .json({success:false}));
});


//export
module.exports = router;