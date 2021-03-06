'use strict'

class ForgotPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email|exists:users,email',
      redirect_url: 'required|url'
    }
  }
}

module.exports = ForgotPassword
