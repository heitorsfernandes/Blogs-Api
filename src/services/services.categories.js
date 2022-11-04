const { Category } = require('../models');

const addCategories = async (name) => {
   const newCategory = await Category.create({
    name,
   }); 
   return newCategory;
};

module.exports = {
    addCategories,
};