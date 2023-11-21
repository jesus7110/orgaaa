const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
console.log(token);
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Token not provided' });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode; //Set the user information in the request object;
    next();
  }
  //jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    //if (err) {
  catch (error) {    
    console.error('Error during token verification')
    return res.status(403).json({ success: false, message: 'Forbidden: Invalid token' });
    }

    //req.user = user; // Set the user information in the request object
    //next();
 // });
};

const authorizeAdmin = (req, res, next) => {
  const user = req.user;

  if (!user || user.role == 'Admin1') {
    return res.status(403).json({ success: false, message: 'Forbidden: Access denied' });
  }

  next();
};

module.exports = { authenticateToken, authorizeAdmin };