'use strict'

const request = require('../helpers/request')

module.exports = {
    createToke: (username, password) => {
        const payload = {
            username,
            password
        }

        return request.post('/auth', payload)
    }
}
