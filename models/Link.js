const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Link model
class Link extends Model {}

// create fields/columns for Link model
Link.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    link_url: {
      type: DataTypes.VARCHAR(50),
      allowNull: true
    },
    
    }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'link'
  }
);

module.exports = Link;