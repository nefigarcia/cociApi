
const Pool=require('pg').Pool
const pool=new Pool({
    user: 'postgres',
    host:'cocihdz.cwlc0akvrbty.us-east-2.rds.amazonaws.com',
    //'localhost' ,
    database:'cocihnz',//'muebles' ,
    password: 'avaricia971',//'dimi',
    port: '5432',
});
const getCon=()=>{
    return new Promise(function(resolve,reject){
        pool.query('select id,nombre,descripcion,precio,fot,fotos from cocinas',(error,results)=>{
            if(error){
                reject(error)
                console.log("can't connect========")
            }
            resolve(results.rows);
        })
    })
}
const getUsu=()=>{
    return new Promise(function(resolve,reject) {
        pool.query('select * from usuarios ',(error,results)=>{
            if(error){
                reject(error)
                console.log("no se encontro usuario");
            }
            resolve(results.rows);
        })
    })
}

const postProd=(request,response)=>{
    const{nombre,descripcion,precio,foto}=request.body;
    const fotim=request.body.fotim; console.log(fotim);
    pool.query('insert into cocinas(nombre,descripcion,precio,fot,fotos) values($1,$2,$3,$4,$5)',[nombre,descripcion,precio,foto,fotim],(error,results)=>{
        if(error){
            throw error;
        }
        response.status(201).send(`producto agregado`)
    })
}

module.exports={
    getCon,getUsu,postProd
}