const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'pritam');
    req.admin = decoded.adminId; // Store admin ID in the request object
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};
