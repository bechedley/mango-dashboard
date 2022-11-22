const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Collab model
class Collab extends Model {}

// create fields/columns for Collab model
Collab.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    collab_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "collab",
  }
);

module.exports = Collab;
