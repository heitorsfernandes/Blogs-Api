const { verifyToken } = require('./token');

const validationToken = async (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const tokenValidated = verifyToken(token);
    if (!tokenValidated) {
       return res.status(401).json({
      message: 'Expired or invalid token',
    });
    }
    
    next();
};

module.exports = {
    validationToken,
};