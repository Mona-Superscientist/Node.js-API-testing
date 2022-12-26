'use strict'

const { expect } = require('chai')
const { createToke } = require('../endpoints/auth')
const { assertOkStatusCode } = require('../Helpers/assertions')
const { fakeUsername, fakePassword } = require('../helpers/faker')

describe('create auth token testcases', () => {

    it('Returns auth token successfully with valid username and password', async() => {
        const response = await createToke('admin', 'password123')
        assertOkStatusCode(response)
        expect(response.body).have.property("token")
    })

    describe('Invalid login trials', () => {
        it('Should return error when login with existing username and wrong password', async() => {
            const response = await createToke('admin', fakePassword())
            assertOkStatusCode(response)
            expect(response.body.reason).to.deep.equals('Bad credentials')

        })

        it('Should return error when login with invalid username and password', async() => {
            const response = await createToke(fakeUsername(), fakePassword())
            assertOkStatusCode(response)
            expect(response.body.reason).to.deep.equals('Bad credentials')

        })
    })
})
