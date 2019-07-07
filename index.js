const express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
const app = express()

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'amruta'
})

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	//res.send("Amruta here");
	res.render('main-page')
})
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/userdetails', function(req,res) {
   var username = req.body.username;
   var useremail = req.body.useremail;
   var query = `INSERT into userdetails(username,useremail) VALUES('${username}', '${useremail}')`;
   console.log(query)
   conn.query(query, function(error, results){
   	  if (error) {
         console.log(error)
         return false;
   	  } else {
   	  	console.log("OK")
   	  	res.send("User Added")
   	  }
   })

})

app.listen(3000)