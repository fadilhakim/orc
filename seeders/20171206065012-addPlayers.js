'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Players', [{
        name: 'Aragorn',
        job: "Knight",
        level:89,
        updatedAt : new Date(),
        createdAt : new Date()
      },{
        name: 'Nazgul',
        job: "Mage",
        level:76,
        updatedAt : new Date(),
        createdAt : new Date()
      },{
        name: 'Elrond',
        job: "Priest",
        level:45,
        updatedAt : new Date(),
        createdAt : new Date()
      },{
        name: 'Gimli',
        job: "Archer",
        level:44,
        updatedAt : new Date(),
        createdAt : new Date()
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
