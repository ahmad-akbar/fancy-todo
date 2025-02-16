const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

class HelperJWT {
    static generateTokenJwt(payload) {
        const token = jwt.sign(payload, SECRET_KEY)
        return token
    }

    static cekToken(token){
        return jwt.verify(token, SECRET_KEY)
    }
}


module.exports = HelperJWT 