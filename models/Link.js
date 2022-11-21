const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Link model
class Link extends Model {}

// create fields/columns for Link model
Link.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    link_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "link",
  }
);

module.exports = Link;
