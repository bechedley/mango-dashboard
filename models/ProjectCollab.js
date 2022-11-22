const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

// create our ProjectCollab model
class ProjectCollab extends Model {}

// create fields/columns for ProjectCollab model
ProjectCollab.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "project",
        key: "id",
        unique: false,
      },
    },
    collab_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "collab",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "project_collab",
  }
);

module.exports = ProjectCollab;
