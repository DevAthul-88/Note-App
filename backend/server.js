require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const noteRouter = require('./routes/noteRoute');

const app  = express();
app.use(express.json())
app.use(cors())

app.use('/user' , userRouter)
app.use('/note' , noteRouter)

const port = process.env.PORT || 4000


mongoose.connect(process.env.MONGO_URL , () => {
    console.log('Database connection established');
})

app.listen(port , () => {
    console.log('Server listening on port' + port);
})
