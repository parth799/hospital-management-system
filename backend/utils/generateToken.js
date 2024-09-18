const jwt = require('jsonwebtoken')

exports.generateToken = (id) => {
    // return jwt.sign({ id }, process.env.JWT_SECRET, {
    return jwt.sign({ id }, "123456789", {
        expiresIn: '30d',
    })
}

