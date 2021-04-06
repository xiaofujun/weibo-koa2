/**
 * @description blog model
 * @author 小付君
 */

const sequelize = require('../seq');
const { STRING, TEXT } = require('../types');

const Blog = sequelize.define('blog', {
  title: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: TEXT,
    allowNull: false
  }
});

module.exports = Blog;
