'use strict'

require('dotenv').config()
const request = require('supertest')

const app = process.env.BASE_URL

module.exports = {
    get:(url, token) => {
        if (token === undefined) {
            return request(app).get(url)
        }
        else {
            return request(app)
                .get(url)
                .set({
                    'Cookie': `token=${token}`
                })
        }
    },

    delete: (url, token) => {
        if (token === undefined) {
            return  request(app).delete(url)
        }
        else {
            return request(app)
                .delete(url)
                .set({
                    'Cookie': `token=${token}`
                })
        }
    },

    post: (url, payload, token) => {
        if (token === undefined) {
            return request(app)
                .post(url)
                .send(payload)
        }
        else {
            return request(app)
                .post(url)
                .set({
                    'Cookie': `token=${token}`
                }).send(payload)
        }
    },

    put: (url, payload, token) => {
        if (token === undefined) {
            return request(app)
                .put(url)
                .send(payload)
        }
        else {
            return request(app)
                .put(url)
                .set({
                    'Cookie': `token=${token}`
                }).send(payload)
        }
    }

}
