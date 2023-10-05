import express from "express"
import db from "db"

const app = express();
app.use(express.json())

app.get("/login", (req, res) =>{
    const {email, password} = req.body
    db.query("SELECT from users WHERE email =")
})

app.get("/register", (req, res) =>{

})

app.listen(8800, () => {
 console.log("connected!");
})