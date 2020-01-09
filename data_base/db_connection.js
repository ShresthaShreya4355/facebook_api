const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/facebook',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})