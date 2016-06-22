'use strict'

class Character {
    alphaEvaluator(name){
      return (name.length > 2 && name.length < 25 && !/[0-9\W]/g.test(name))
    }
    numericEvaluator(number) {
      if(!number) return false
      return !/\D+/.test(number)
    }
    isValid(obj) {
      var array = Object.keys(obj).map(function(key) {
        return obj[key]
      });
      var self = this;
      return array.reduce(function(prev, curr) {
        if(prev) {
          return !/\D+/.test(curr) ? self.numericEvaluator(curr): self.alphaEvaluator(curr)
        }

        return false
      }, true)
    }
}


module.exports = Character
