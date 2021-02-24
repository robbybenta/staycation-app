'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("hotels", [
      {
        hotel_name: "Ciputra Hotel",
        price: "615000",
        location: "Jakarta",
        rating: 4.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        hotel_name: "Zest Hotel",
        price: "256000",
        location: "Bogor",
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        hotel_name: "Amarelo Hotel",
        price: "195000",
        location: "Solo",
        rating: 3.4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        hotel_name: "Zuri Express Lippo Hotel",
        price: "212000",
        location: "Cikarang",
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        hotel_name: "Satoria Hotel",
        price: "420000",
        location: "Yogyakarta",
        rating: 5.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("hotels", null, {})
  }
};
