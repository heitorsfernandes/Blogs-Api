const servicesUser = require('../services/services.user');

const addUser = async (req, res) => {
    const { status, message } = await servicesUser.addUser(req.body);

    return res.status(status).json(message);
};

const getAllUsers = async (req, res) => {
    const { status, message } = await servicesUser.getAllUsers();

    return res.status(status).json(message);
};

module.exports = {
  addUser,
  getAllUsers,
};