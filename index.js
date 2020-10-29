const express=require('express')
const app=express()
const port=3001
var bodyParser=require('body-parser');

const conn=require('./conn.js')

app.use(express.json())
app.use(bodyParser.json({limit:'50mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://www.cocinashdz.toltechconsulting.com'),//'http://localhost:3000'),
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE','OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});
app.get('/',(req,res)=>{
    conn.getCon()
    .then(response=>{
        res.status(200).send(response);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
})
app.get('/usuario',(req,res)=>{
    conn.getUsu()
    .then(response=>{
        res.status(200).send(response);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
})
app.post('/regProd',conn.postProd)
app.listen(port,()=>{
    console.log(`corriendo puerto ${port}`)
})