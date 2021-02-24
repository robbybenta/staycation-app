'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order_detail.init({
    hotel_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    day: {
      type: DataTypes.INTEGER,
      validate: {
        checkDay(value) {
          if (value < 0) {
            throw new Error("Cannot Input less Than Zero")
          }
        }
      }
    },
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};