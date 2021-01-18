const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


db.sync()
  .then(()=>{
    console.log('db synced')
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
