import jwt from 'jsonwebtoken';
import config from '../../config/index.js';

const authentication = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, config.jwtSecret);
      req.user = { _id: decoded.id };
      next();
    } catch (error) {
      res.status(401).json({ success: false, error: error.message });
      throw new Error('Not Authorized');
    }
  } else {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

export default authentication;