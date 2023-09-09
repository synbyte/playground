const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database_one.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("connected to db")
    }
})


db.run('INSERT INTO customers VALUES(?,?)',[12,'hii'])
db.close()