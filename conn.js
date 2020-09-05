const Pool=require('ps').Pool
const pool=new Pool({
    user: 'postgres',
    host:'cocihdz.cwlc0akvrbty.us-east-2.rds.amazonaws.com' ,
    database:'cocihnz' ,
    password: 'avaricia971',
    port: '5432',
});
const getCon=()=>{
    return new Promise(function(resolve,reject){
        pool.query('select * from usuarios',(error,results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
module.exports={
    getCon
}