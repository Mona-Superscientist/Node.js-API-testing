'use strict'

const expect = require('./expect')

const _assertOnStatusCode = (response, statusCode) =>
    expect (response.status).to.deep.equals(statusCode)

module.exports = {
    assertCreatedStatusCode: response => _assertOnStatusCode(response, 201),

    assertOkStatusCode: response => _assertOnStatusCode(response, 200),

    assertBadRequestStatusCode: response => _assertOnStatusCode(response, 400),

    assertUnauthorizedStatusCode: response => _assertOnStatusCode(response, 401),

    assertForbiddenStatusCode: response => _assertOnStatusCode(response, 403),

    assertMethodNotAllowedStatusCode: response => _assertOnStatusCode(response, 405),

    assertInternalServerErrorStatusCode: response => _assertOnStatusCode(response, 500)

}
