'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|unique:users|email',
      password: 'required|confirmed|min:6'
    }
  }
}

module.exports = User
