const servicesCategories = require('../services/services.categories');

const addCategories = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const newCategory = await servicesCategories.addCategories(name);
    return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
    const allCategories = await servicesCategories.getAllCategories();

    return res.status(200).json(allCategories);
};

module.exports = {
    addCategories,
    getAllCategories,
};