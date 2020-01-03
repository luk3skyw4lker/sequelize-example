const { Model, DataTypes } = require('sequelize');

class Techs extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'user' });
  }
}

module.exports = Techs;