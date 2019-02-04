let promise = require('bluebird');

const initOptions = {
    promiseLib:promise
}
 const config = {
     host: 'localhost',
     port: 5432,
     database: 'burnify',
     user:'postgres'
 }


 const pgp = require('pg-promise')(initOptions);
 const dbs = pgp(config)

 module.exports=dbs;
