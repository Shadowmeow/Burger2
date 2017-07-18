module.exports = function(sequelize, DataTypes) {
  var Eater = sequelize.define("Eater", 
    {
      eater_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      classMethods: {
        associate: function(models) {
          Eater.hasMany(models.Burgers)
        }
      }
    });

  return Eater;
};