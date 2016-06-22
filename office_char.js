'use strict'

class Character {
  signup(char) {
    var properties = Object.keys(char).map(function(val) {
      return char[val]
    })
    var checks = properties.map(function(prop) {
      return (/[0-9\W]+/g.test(char.lastName) || prop.length < 3 || prop.length > 25)
    });
    return checks.indexOf(true) < 0

  }
}

module.exports = Character
