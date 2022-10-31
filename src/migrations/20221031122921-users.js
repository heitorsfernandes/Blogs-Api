'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface,_Sequelize) => {
    
    await queryInterface.createTable('users', { 
      id: { autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        type: DataTypes.INTEGER,
      },
      display_name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      image: {
        type: DataTypes.STRING,
      },
     });
  
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
