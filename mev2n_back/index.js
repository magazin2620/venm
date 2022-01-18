require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const { routes } = require('./src/routes')

// db
mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("db connection successfull"))
	.catch((err) => { console.log(err) });

// app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
	app.use(`/api/${item}`, require(`./src/routes/${item}`))
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname + "/dist/"));
	app.get("*", (req, res) => {
		res.sendFile(__dirname + "/dist/index.html");
	})
}

// server
const PORT = process.env.PORT || 3000;
http.createServer({}, app).listen(PORT);
console.log(`Server running at port: ${PORT}`);