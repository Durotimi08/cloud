import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "durotimi1",
    database: "cloud"
})
export default db