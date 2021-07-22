const Pool=require('pg').Pool;

const pool =new Pool({
    user:'postgres',
    host:'localhost',
    database:'needforuser',
    password:'deepak619',
    port:5432
});


module.exports=pool;