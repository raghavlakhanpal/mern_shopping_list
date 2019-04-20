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
// Desc     Create a POST
// Access   Public
router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });

newItem
    .save()
    .then(item => res.json(item));

});



//export
module.exports = router;