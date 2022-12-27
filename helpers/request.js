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
                    Cookie: `token=${token}`
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
                    Cookie: `token=${token}`
                })
        }
    },

    post: (url, payload, token) => {
        if (token === undefined) {
            return request(app)
                .post(url)
                .set({
                    'Accept': 'application/json',
                })
                .send(payload)
        }
        else {
            return request(app)
                .post(url)
                .set({
                    'Accept': 'application/json',
                    Cookie: `token=${token}`
                }).send(payload)
        }
    },

    put: (url, payload, token) => {
        if (token === undefined) {
            console.log('test no token')
            return request(app)
                .put(url)
                .set({
                    'Accept': 'application/json'
                })
                .send(payload)
        }
        else {
            console.log('test token exists')
            return request(app)
                .put(url)
                .set({
                    'Accept': 'application/json',
                    Cookie: `token=${token}`
                }).send(payload)
        }
    }

}
