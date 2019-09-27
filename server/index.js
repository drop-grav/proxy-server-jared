require('newrelic')
const express = require ('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');  

app.use(express.static('public'));
app.use(`/listing/:id`, express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, ()=> console.log(`Reservations module listening on port ${port}`))
