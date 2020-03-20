const express = require('express');
const Database = require('./database');
const app = express();

let db = new Database();

app.use(express.json());

app.get('/',(request,response)=>{
    response.send('Hello world');
});
app.get('/quartieri',(request,response)=>{
    response.json(db.getAll().map(({id,nome,dato}) => ({ id:id, nome:nome, dato:dato })))
});

app.get('/quartieri/:id',(request,response)=>{
    response.json(db.get(request.params.id));
});

/*
app.post('/regioni',(request,response)=>{
    response.json(db.add(request.body));
})

app.delete('/regioni/:id',(request,response)=>{
    console.log(request.params);
    response.json(db.delete(request.params.id));
})
*/

app.listen(3000);

