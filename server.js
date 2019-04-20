const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db=require("./config/keys").mongoURI;

//Connect to Mongodb
mongoose
    .connect(db)
    .then(()=> console.log("Connected to MongoDB...."))
    .catch(err=>console.log(err));

const port=process.env.PORT || 5000;

//actual connection to website
app.listen(port,()=>console.log(`Server started on ${port}`));