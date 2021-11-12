@@include('_config.js')
let mysql = require('mysql2');
let conn = mysql.createConnection(config);
conn.connect(function(err){
    if (err) {
        console.log(`У підключенні до бази данних сталася помилка: ${err.message}`);
    }else{
        console.log('Підключення до бази данних успішне');
    }
});