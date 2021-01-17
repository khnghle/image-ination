require('dotenv/config')
const multer = require('multer')
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')
const AWS = require('aws-sdk')
const { v4 : uuidv4} = require('uuid')

const app = express();
const port = process.env.PORT || 5000;

const s3 = new AWS.S3({
  accessKeyId : process.env.AWS_ID,
  secretAccessKey : process.env.AWS_SECRET
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage({
  destination : function (req, file, callback){
    callback (null, '')
  }
})

const upload = multer({storage}).single('image')

app.post('/upload', upload, (req, res) => {

  let myFile = req.file.originalname.split(".")
  const fileType = myFile[myFile.length - 1]

  const params = {
    Bucket:  process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer 
  }

  s3.upload(params, (error, data) => {
    if(error){
      res.status(500).send(error)
    }

    res.status(200).send(data)
  })
})

app.use('/api', require('./api'))

if(require.main === module){
  db.sync()
    .then(()=>{
      console.log('db synced')
      app.listen(port, () => console.log(`Listening on port ${port}`));
  })
}