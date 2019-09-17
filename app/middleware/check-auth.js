const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        request.userData = decoded;
        next();
    } catch (e) {
        return response.status(401).json({
            error: "Auth failed",
            message: e,
        })
    }
};