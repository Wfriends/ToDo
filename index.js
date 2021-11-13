let config = require('./config');
    mysql = require('mysql2'),
    conn = mysql.createConnection(config);
conn.connect(function(err){
    if (err) {
        console.error(`У підключенні до бази данних сталася помилка: ${err.message}`);
    }else{
        console.log('Підключення до бази данних успішне');
    }
});