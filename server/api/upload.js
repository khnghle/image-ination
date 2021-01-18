const multer = require('multer')
const AWS = require('aws-sdk')
const { v4 : uuidv4} = require('uuid')
const router = require('express').Router()
module.exports = router
const {Image} = require('../db/models')

const s3 = new AWS.S3({
  accessKeyId : process.env.AWS_ID,
  secretAccessKey : process.env.AWS_SECRET
})


const storage = multer.memoryStorage({
  destination : function (req, file, callback){
    callback (null, '')
  }
})

const upload = multer({storage}).single('image')

router.post('/', upload, (req, res) => {
  let myFile = req.file.originalname.split(".")
  const fileType = myFile[myFile.length - 1]

  const params = {
    Bucket:  process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer 
  }

  s3.upload(params, async (error, data) => {
    if(error){ res.status(500).send(error)}
    const {key, Location} = data
    const {name} = req.body
    await Image.create({key, name, location: Location})
    res.status(200).send(data)
  })
})

router.delete('/:key', (req, res) => {

  s3.deleteObject({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.params.key
  }, async function (err, data){
    if(err){res.status(500).send(err)}

    await Image.destroy({
      where: {
        key : req.params.key
      }
    })
    res.status(204).send(data)
  })
})
