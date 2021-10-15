const express = require("express")
const app = express()
const port = 3000
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
}
const mysql = require("mysql2")
const connection = mysql.createConnection(config)

const createTableStmt = `create table if not exists people(
  id int not null auto_increment,
  name varchar(255),
  primary key(id))`

connection.query(createTableStmt)

const insertStmt = `INSERT INTO people(name) values('Victor')`
connection.query(insertStmt)
connection.end()

app.get("/", (req, res) => {
  let peopleList = ""
  const queryStmt = "SELECT * FROM people"
  const mysqlPromise = require("mysql2/promise")
  mysqlPromise
    .createConnection(config)
    .then((conn) => conn.query(queryStmt))
    .then(([rows, fields]) => {
      rows.map((r) => (peopleList += `<li>${r.name}</li>`))

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>${peopleList}</ul>
      `)
    })
})

app.listen(port, () => {
  console.log("Rodando na porta " + port)
})
