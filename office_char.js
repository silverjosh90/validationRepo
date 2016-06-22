'use strict'

class Character {
  signup(char) {
    console.log(char.firstName.test(/\s/g));
    if(!char.firstName || !char.lastName) return false
    return true
  }
}

module.exports = Character
