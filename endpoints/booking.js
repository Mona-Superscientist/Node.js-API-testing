'use strict'

const request = require('../helpers/request')

module.exports = {
    createBooking:(bookingSample) => {
        return request.post('/booking', bookingSample)
    },

    deleteBooking: (bookingId, token) => {
        return request.delete(`/booking/${bookingId}`, token)
    },

    getAllBookings: () => {
        return request.get('/booking')
    },


    getBookingById: (bookingId) => {
        return request.get(`/booking/${bookingId}`)
    },

    updateBooking: (bookingId, token, bookingSample) => {
        return request.post(`/booking/${bookingId}`, bookingSample, token)
    }
}
