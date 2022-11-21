const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Tag model
class Tag extends Model {}

// create fields/columns for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.VARCHAR(30),
      allowNull: false
    },
    }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  }
);

module.exports = Tag;