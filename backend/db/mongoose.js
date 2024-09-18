const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect("mongodb://localhost:27017/HMS", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Db connected")
})