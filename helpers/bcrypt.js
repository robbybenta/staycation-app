const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
    const salt = bcrypt.genSalt(10)
    const hash = bcrypt.hashSyncSalt(password, salt)
    return hash
}

const comparePassword = (input, passwordDB) => {
    return bcrypt.compareSync(input, passwordDB)
}

module.exports = { hashPassword, comparePassword }
