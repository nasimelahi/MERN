const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/key').mongoURI;
const item = require('./route/api/items');
const path = require ('path');


//Body Parser
app.use(express.json());


//connetion to mongodb
mongoose.connect(db,{useNewUrlParser:true , useUnifiedTopology : true})
.then(() => {console.log('Mongodb is connected')})
.catch((error) => console.log(error));

//Usr Routes
app.use('/api/items',item);

//server static assets if in production

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build' , 'index.html'))
    })
}







const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log('Server is conneted at port ' + PORT);
})











