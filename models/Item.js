const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//creating Schema
const ItemSchema=Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

//exporting the model
module.exports=Item=mongoose.model('item',ItemSchema);