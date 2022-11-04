const { Category } = require('../models');

const addCategories = async (name) => {
   const newCategory = await Category.create({
    name,
   }); 
   return newCategory;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();
    return allCategories;
};

module.exports = {
    addCategories,
    getAllCategories,
};