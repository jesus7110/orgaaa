const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Forbidden: Invalid token' });
    }

    req.user = user; // Set the user information in the request object
    next();
  });
};

const authorizeAdmin = (req, res, next) => {
  const user = req.user;

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Forbidden: Access denied' });
  }

  next();
};

module.exports = { authenticateToken, authorizeAdmin };