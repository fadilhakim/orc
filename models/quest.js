'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quest = sequelize.define('Quest', {
    quest: DataTypes.STRING,
    level: DataTypes.STRING,
    detail: DataTypes.TEXT
  });

  Quest.associate = function (models) {
    //Quest.hasMany(models.Player)
    Quest.belongsToMany(models.Player, {through :'PlayerQuest'})
    // Quest.hasMany(models.PlayerQuest)
  }

  return Quest;
};