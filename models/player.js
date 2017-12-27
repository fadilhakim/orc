'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    job: DataTypes.STRING,
    level: DataTypes.INTEGER
  });

  Player.associate = function (models) {
    Player.belongsToMany(models.Quest, { through: 'PlayerQuest' });
    //Player.hasMany(models.playerQuest);
  };

  return Player;
};