'use strict'

const { booking } = require('../endpoints')
const { generateBooking } = require('../helpers/faker')
const { assertOkStatusCode } = require('../helpers/assertions')
const expect = require('../helpers/expect')

describe('Booking Testcases', () => {

   describe('Create booking', () => {
        it('Should create a new booking successfully', async()  => {
            const bookingSample = generateBooking()
            console.log('sample', bookingSample)
            const response = await booking.createBooking(bookingSample)
            console.log(response)
            assertOkStatusCode(response)
            console.log(response.body)
        })
   })

   describe('Get All Bookings', () => {
        it.only('Should return booking ids for all bookings', async() => {
            const response = await booking.getAllBookings()
            assertOkStatusCode(response)
            expect(response.body[0]).have.property('bookingid')
        })
   })


})
