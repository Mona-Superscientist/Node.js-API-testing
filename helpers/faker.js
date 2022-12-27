const _ = require('lodash')
const { faker } = require('@faker-js/faker')
const bookingSample = require('../samples/booking-sample')

module.exports = {
    fakeUsername: () => faker.internet.userName(),

    fakePassword: () => faker.internet.password(),

    fakeId: () => faker.datatype.uuid,

    generateBooking: () => {
        booking = _.cloneDeep(bookingSample)
        _.set(booking, 'firstname', faker.name.firstName())
        _.set(booking, 'lastname', faker.name.lastName())
        _.set(booking, 'totalprice', Math.round(faker.finance.amount()))
        return booking
    }
}
