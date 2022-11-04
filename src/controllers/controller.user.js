const servicesUser = require('../services/services.user');

const addUser = async (req, res) => {
    const { status, message } = await servicesUser.addUser(req.body);

    return res.status(status).json(message);
};

const getAllUsers = async (req, res) => {
    const { status, message } = await servicesUser.getAllUsers();

    return res.status(status).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await servicesUser.getUserById(id);

    return res.status(status).json(message);
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};