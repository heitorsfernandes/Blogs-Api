const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const generateToken = (id) => {
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: { id } }, secretKey, jwtConfig);
    return token;
  };

const verifyToken = (token) => {
  try {
  const tokenVerified = jwt.verify(token, secretKey);
    return tokenVerified;
  } catch (error) {
    return false;
}
};  
  
module.exports = {
  generateToken,
  verifyToken,
};