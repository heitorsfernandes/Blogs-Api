const { User } = require('../models');
const { generateToken } = require('../middlewares/token');

const login = async (email) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return { status: 200, message: { token: generateToken(Number(user.id)) } };
    }
  };
  
module.exports = {
  login,
};