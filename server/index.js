require('dotenv/config')
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'))

if(require.main === module){
  db.sync()
    .then(()=>{
      console.log('db synced')
      app.listen(port, () => console.log(`Listening on port ${port}`));
  })
}