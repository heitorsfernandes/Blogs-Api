const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
  
    const secretKey = process.env.JWT_SECRET;
  
    const token = jwt.sign({ data: { id } }, secretKey, jwtConfig);
    return token;
  };
  
module.exports = {
  generateToken,
};