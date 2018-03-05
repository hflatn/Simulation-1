const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products_controller = require('./products_controller.js')
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then ( dbInstance => { app.set('db', dbInstance);
})

const port = process.env.PORT || 3333
app.listen( port, () => { console.log("Servy werky werky!")})
