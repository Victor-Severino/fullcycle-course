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

const sql = `INSERT INTO people(name) values('Victor')`
connection.query(sql)
connection.end()

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>")
})

app.listen(port, () => {
  console.log("Rodando na porta " + port)
})
