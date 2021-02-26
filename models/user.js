'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    fullname() {
      return `${this.first_name} ${this.last_name}`
    }
    static associate(models) {
      user.belongsToMany(models.hotel, { through: models.order_detail })
    }
    getFullname() {
      return this.first_name + ' ' + this.last_name
    }
  };
  user.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'user',
    hooks: {
      beforeCreate: (instance, options) => {
        instance.dataValues.password = hashPassword(instance.dataValues.password)
      }
    }
  });
  return user;
};