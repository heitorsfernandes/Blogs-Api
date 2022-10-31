const servicesLogin = require('../services/services.login');

const login = async (req, res) => {
    const { email } = req.body;
    const user = await servicesLogin.login(email);

    return res.status(user.status).json(user.message);
};

module.exports = {
  login,
};