require('./database/mongoose')
const express = require('express');

const bodyParser = require('body-parser');

const taskRouter = require('./routers/route');




const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(taskRouter);


app.listen(3000);