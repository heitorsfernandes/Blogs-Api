const validationUser = (req, res, next) => {
    const { displayName, email, password } = req.body;
    
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    const validateEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    if (!validateEmail) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400)
          .json({ message: '"password" length must be at least 6 characters long' });
      }

    next();
};

module.exports = {
    validationUser,
};