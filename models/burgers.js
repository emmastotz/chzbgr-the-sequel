module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING, 
      validate: {
        allowNull: false
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      validate: {
        allowNull: false
      }
    }
  });
  return Burgers;
}