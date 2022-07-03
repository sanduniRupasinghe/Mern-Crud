const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//import routes
const userRoutes = require('./routes/users');


//app midddleware
app.use(bodyParser.json());
app.use(cors());


//route midddleware
app.use(userRoutes);


//const URL
const PORT = 8000;
const DB_URL = 'mongodb+srv://mern:mern123@mernapp.mzyeo9t.mongodb.net/mernCrud?retryWrites=true&w=majority';


mongoose.connect(DB_URL,{
    useNewUrlParser :true,
    useUnifiedTopology : true,
})

.then(() =>{
    console.log('DB connected');
})
.catch((err) =>console.log('DB connection erre',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});