const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Addresses = require('../models/Addresses');
const Tech = require('../models/Techs');

const connection = new Sequelize(dbConfig);

User.init(connection);
Addresses.init(connection);
Tech.init(connection);

Addresses.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;