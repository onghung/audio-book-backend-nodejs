'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const bookRouter = require('./routes/book-routes')


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookRouter.routes)

app.listen(config.port, () => console.log('listening on port ' + config.port))
