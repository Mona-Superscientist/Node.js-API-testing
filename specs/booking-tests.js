'use strict'

const { booking, auth } = require('../endpoints')
const { generateBooking, fakeId } = require('../helpers/faker')
const { assertOkStatusCode, assertMethodNotAllowedStatusCode } = require('../helpers/assertions')
const expect = require('../helpers/expect')

describe('Booking Testcases', () => {

   describe('Create booking', () => {
        it('Should create a new booking successfully', async()  => {
            const bookingSample = generateBooking()
            const response = await booking.createBooking(bookingSample)
            assertOkStatusCode(response)
            expect(response.body).have.property('bookingid')
            expect(response.body.booking).to.deep.equals(bookingSample)
        })
   })

   describe('Get All Bookings', () => {
        it('Should return booking ids for all bookings', async() => {
            const response = await booking.getAllBookings()
            assertOkStatusCode(response)
            expect(response.body[0]).have.property('bookingid')
        })
   })

   describe('Update bookings', () => {
        let token
        let bookingId
        let modifiedBooking

        before(async() => {
            const authResponse = await auth.createToke('admin', 'password123')
            token = authResponse.body.token

            const bookingSample = generateBooking()
            const newBookingRes = await booking.createBooking(bookingSample)
            bookingId = newBookingRes.body.bookingid
        })

        beforeEach(() =>
            modifiedBooking = generateBooking()
        )

        it('Should update an existing booking successfully', async() => {
            const updatedBookingRes =  await booking.updateBooking(bookingId, token, modifiedBooking)
            assertOkStatusCode(updatedBookingRes)
            expect(updatedBookingRes.body).to.deep.equals(modifiedBooking)

        })

        it('Should return 405 for non existing booking id', async() => {
            const response = await booking.updateBooking(fakeId(), token, modifiedBooking)
            assertMethodNotAllowedStatusCode(response)
        })
   })


})
