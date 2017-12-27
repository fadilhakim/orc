'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teachers', [{
        first_name: 'Muhammad',
        last_name:"Fadil Hakim",
        email: "fadil.nylon@gmail.com",
        age : 25,
        gender: "male",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        first_name: 'Ryan',
        last_name:"Akbar",
        email: "ryanAKbar@gmail.com",
        age : 27,
        gender: "male",
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
