'use strict'

class Character {
    alphaEvaluator(name){
      return (name.length > 2 && name.length < 25 && !/[0-9\W]/g.test(name))
    }
    numericEvaluator(number) {
      if(!number) return false
      return !/[a-z A-Z]/.test(number)
    }
}


module.exports = Character
