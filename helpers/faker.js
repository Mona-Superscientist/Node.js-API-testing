const _ = require('lodash')
const { faker } = require('@faker-js/faker')
const bookingSample = require('../samples/booking-sample')

module.exports = {
    fakeUsername: () => faker.internet.userName(),

    fakePassword: () => faker.internet.password(),

    generateBooking: () => {
        booking = _.cloneDeep(bookingSample)
        _.set(booking, 'firstname', faker.name.firstName())
        _.set(booking, 'lastname', faker.name.lastName())
        _.set(booking, 'totalprice', faker.finance.amount())
        return booking
    }
}
