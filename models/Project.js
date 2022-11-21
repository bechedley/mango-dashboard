const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Project model
class Project extends Model {}

// create fields/columns for Project model
Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    project_due: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    project_summary: {
        type: DataTypes.TINYTEXT,
        allowNull: false
    },
    project_description: {
        type: DataTypes.LONGTEXT,
        allowNull: true
    },
    project_status: {
        type: DataTypes.ENUM("active", "pending", "upcoming", "cancelled", "finished"),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
      },
    
    }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project'
  }
);

module.exports = Project;