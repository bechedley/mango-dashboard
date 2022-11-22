const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our ProjectCollab model
class ProjectLink extends Model {}

// create fields/columns for ProjectLink model
ProjectLink.init(
  {
    project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'id',
          unique: false
        }
      },
    link_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'link',
          key: 'id',
          unique: false
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project_link',
  }
);

module.exports = ProjectLink;
