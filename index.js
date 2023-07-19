const express= require('express');
const cors = require('cors');
const bodyParser= require('body-parser')

const { errorHandler } = require('./handlers');

const app=express();
const port = 4000;

app.get('/', (req, res,)=> res.json({
    hello: 'world'
}));

app.use((req, res, next)=>{
    const err = new Error('Not found');
    err.status=404;

    next(err);
});

app.use (errorHandler);


app.listen(port, console.log(`server started on port ${port}`));