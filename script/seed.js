const db = require('../server/db')
const {Image} = require('../server/db/models')
const images = require('./image.json')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(images.map(picture => (Image.create(picture))))
  console.log('seed successful')
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}