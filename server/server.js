/* eslint @typescript-eslint/no-var-requires: "off" */
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

app.set('port', 3000);
app.use(cors());
app.options('*', cors());

mongoose.connect('mongodb://localhost:27017/vue-budget', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[OK] DB is connected'))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use('/api/records', require('./routes/record'));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});