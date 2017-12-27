'use strict';
module.exports = (sequelize, DataTypes) => {
  var PlayerQuest = sequelize.define('playerQuest', {
    id : 
    {
      allowNull: false,
      autoIncrement: true,
      type : DataTypes.INTEGER,
      primaryKey :  true
    },
    playerId: DataTypes.INTEGER,
    questId: DataTypes.INTEGER
  });

  // PlayerQuest.associate = function (models) {
  //   PlayerQuest.belongsTo(models.Player)
  //   PlayerQuest.belongsTo(models.Quest)
  // };

  return PlayerQuest;
};