const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products_controller = require('./products_controller.js')
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then ( dbInstance => { console.log("database connected")
 app.set('db', dbInstance);
})

app.post('/api/addbin', products_controller.create);
app.get('/api/getonebin/:shelve/:id', products_controller.get);
app.put('/api/bin/:id', products_controller.update);
app.delete('/api/bin/:id', products_controller.delete);

app.get('/api/:shelve/getall', products_controller.getall);

const port = process.env.PORT || 3333
app.listen( port, () => { console.log("Servy werky werky!")})

// `/api/bin=/1/?shelf=${ this.props.match.params.shelve }`


// `http://localhost:3333/api/bin=${this.props.match.params.id}/?shelf=${ this.props.match.params.shelve }`
// `/api/bin=${this.props.match.params.id}/?shelf=${ this.props.match.params.shelve }`