const express = require('express');
const app = express();
const port = 8000;
const payload = require('./payload');
// const routes = require('./routes');
app.use('/',require('./routes'));
app.get('/api/add',function(req,res){
    res.send({
        status:"Success",
        payload:payload
    })
})

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running on port ',port);
})