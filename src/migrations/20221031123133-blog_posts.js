'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: { autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published: {
        type: DataTypes.DATE,
      },
      updated:{
        type: DataTypes.DATE,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};
