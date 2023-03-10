'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.hasMany(models.Membership, { foreignKey: 'groupId', onDelete: 'CASCADE' });
      Group.hasMany(models.Venue, { foreignKey: 'groupId', onDelete: 'CASCADE' });
      Group.hasMany(models.Event, { foreignKey: 'groupId', onDelete: 'CASCADE' });
      Group.hasMany(models.groupsImage, { foreignKey: 'groupId', as: 'GroupImages', onDelete: 'CASCADE' });
      Group.belongsTo(models.User, { foreignKey: 'organizerId', as: 'Organizer', onDelete: 'CASCADE' });
    }
  }
  Group.init({
    organizerId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2]
      }
    },
    numMembers: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    previewImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Group',
    // defaultScope: {
    //   attributes: {
    //     exclude: ['numMembers', 'previewImage']
    //   }
    // }
  });
  return Group;
};
