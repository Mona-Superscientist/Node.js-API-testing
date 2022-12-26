const { faker } = require('@faker-js/faker')

module.exports = {
    fakeUsername: () => faker.internet.userName(),

    fakePassword: () => faker.internet.password(),
}
