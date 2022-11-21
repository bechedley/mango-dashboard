const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// create our ProjectTag model
class ProjectTag extends Model {}

// create fields/columns for ProjectTag model
ProjectTag.init(
  {
    project_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'id',
          unique: false
        }
      },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
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
    modelName: 'project_tag',
  }
);

module.exports = ProjectTag;
