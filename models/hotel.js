'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hotel.belongsToMany(models.user, { through: models.order_detail })
    }
  };
  hotel.init({
    hotel_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};