const exp = require ('express')


const app = exp()

const mysql = require("mysql2");

const connection = mysql.createConnection({
    port: "3306",
    user: "gen_user",
    host: "185.200.241.27",
    database: "test_ustod",
    password: "4rX&cHtw:uy&,l"
});

app.get('/', function(req,res) {
    connection.query('SELECT * FROM products', (err, rows,fields)=>{
        if(!err)
            res.send(rows)
        else 
        console.log(err)
        
    })
})


app.listen(8000, () =>{
    console.log("server started");
})