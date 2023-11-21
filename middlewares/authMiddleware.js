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

const authenticateUserToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Token not provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check if the user exists
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    req.user = user; // Set the user information in the request object
    next();
  } catch (error) {
    console.error('Error during user token authentication:', error.message);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Unauthorized: Token has expired' });
    }

    return res.status(403).json({ success: false, message: 'Forbidden: Invalid token' });
  }
};


module.exports = { authenticateToken, authorizeAdmin, authenticateUserToken };