const { User } = require('../models');
const { generateToken } = require('../middlewares/token');

const addUser = async (body) => {
    const { email } = body;
    const user = await User.findOne({ where: { email } });

    if (user) { 
        return { status: 409, message: { message: 'User already registered' } };
      }

      const addedUser = await User.create(body);
    
      const { id } = addedUser;
      return { status: 201, message: { token: generateToken(+id) } };
};

const getAllUsers = async () => {
    const users = await User.findAll({
    attributes: { exclude: ['password'] },
    });
    const newUsers = users.map(({ dataValues }) => dataValues);
    console.log(newUsers);
    return { status: 200, message: newUsers };
};

const getUserById = async (id) => {
    const user = await User.findOne({
        where: { id }, attributes: { exclude: ['password'] },
    });
    if (!user) {
        return { status: 404, message: { message: 'User does not exist' } };
    }
    return { status: 200, message: user };
};

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
};