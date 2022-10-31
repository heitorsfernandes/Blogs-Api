'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface,_Sequelize) => {
    await queryInterface.createTable('categories', { 
      id: { autoIncrement:true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface,_Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
