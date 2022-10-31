'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface,_Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      post_id: { 
        type: DataTypes.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        }
      },
     });
  },

  down: async (queryInterface,_Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};