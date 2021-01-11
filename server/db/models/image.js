const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define(
  'image',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty : true
      }
    },
    location: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty : true
      }
    },
    qty: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1
      }
    }
  },
  {timestamps: false}
)

module.exports = Image
