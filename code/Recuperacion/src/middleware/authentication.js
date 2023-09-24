const jwt = require('jsonwebtoken');
const Teacher = require('./models');

const authenticate = async (req, res, next) => {
  const token = req.headers['authorization'];
  try {
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    const user = await Teacher.findOne({ id: decoded.id });
    if (!user) throw new Error('No user found.');
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

const authorize = (roles) => (req, res, next) => {
  if (roles.includes(req.user.role)) {
    next();
  } else {
    res.status(403).send({ message: 'Forbidden' });
  }
};

module.exports = { authenticate, authorize };

