require('dotenv').config();
var massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const bc = require('controller');  //needs path

const app = express();


app.use( bodyParser.json() );

massive({
    host: 'ec2-54-235-212-58.compute-1.amazonaws.com',
    port:'5432',
    database:'dhufe0at70snj',
    user:'xftdhbkedqctxv',
    password: '4cfb25e5b794aefc47ba472ccc45eb1bc64018779e11a56067ca99cf3685cde6',
    ssl: true
  }).then(function(db) {
    app.set('db', db);
  })

// app.get('/api/inventory', function(req, res) {
//     var state = req.query.state
//     req.app.get('db').get_inventory([state]).then(resp => {
//       res.send(resp)
//     })
//   });

app.get('/api/inventory', controller.get_inventory);
app.post('/api/product')




const PORT = 3006;

app.listen( PORT, () => { console.log(`Server listening on port ${PORT}`); } );