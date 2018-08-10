require('dotenv').config();
var massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const bc = require('controller');

const app = express();


app.use( bodyParser.json() );

app.get('/api/inventory', controller.get_inventory)


const PORT = 3006;

app.listen( PORT, () => { console.log(`Server listening on port ${PORT}.`); } );