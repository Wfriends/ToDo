let config = {
    host: 'localhost',
    user: 'mysql',
    database: 'test',
    password: 'mysql'
}
let mysql = require('mysql2');
let conn = mysql.createConnection(config);
conn.connect(function(err){
    if (err) {
        console.error(`У підключенні до бази данних сталася помилка: ${err.message}`);
    }else{
        console.log('Підключення до бази данних успішне');
    }
});