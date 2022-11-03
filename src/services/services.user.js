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
    return { status: 200, message: users };
};

module.exports = {
    addUser,
    getAllUsers,
};