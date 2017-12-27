'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('Quests', [{
        quest: 'John Doe',
        level: 45,
        detail: "Unite all player and kill all orc who attack Rohan Castle",
        createdAt : new Date(),
        updatedAt: new Date()
      },{
        quest: 'The Fellowship of the ring',
        level: 75,
        detail: "Protect the hobbit with all cost to the mountain of doom",
        createdAt : new Date(),
        updatedAt: new Date()
      },{
        quest: 'A Fallen Man in the Middle of the Deser',
        level: 15,
        detail: "Protect the hobbit with all cost to the mountain of doom",
        createdAt : new Date(),
        updatedAt: new Date()
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
