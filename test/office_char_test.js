var expect = require('chai').expect
var Character = require('../office_char')

describe('When I sign up a character', function(){
  var character;

  beforeEach(function(){
    character = new Character()
  })
	describe('alphaEvaluator', function(){
		it('fails when blank input is submitted', function(){

       expect(character.alphaEvaluator('')).to.equal(false)
		})
    it('passes when name is longer than 2 characters', function(){

      expect(character.alphaEvaluator('dwight')).to.equal(true)
    })
    it('fails when name is longer than 24', function(){
      expect(character.alphaEvaluator('sdlfkjsdlfkjsdflksdjflksdjflgdfgdagsdfgdfgdsfk')).to.equal(false)
    })
    it('cannot have any whitespace', function(){
      expect(character.alphaEvaluator('D whight')).to.equal(false)
    })
    it('cannot have special characters', function() {
      expect(character.alphaEvaluator('Dwight!')).to.equal(false)
    });
    it('cannot have numeric input', function() {
      expect(character.alphaEvaluator('Dwigh43435')).to.equal(false)
    });
	})
  describe('numericEvaluator', function(){
  	it('fails when input is blank', function(){
      expect(character.numericEvaluator('')).to.equal(false)
  	})
    it('passes when input is only numbers', function(){
      expect(character.numericEvaluator('12345')).to.equal(true)
    })
    it('fails when input is has characters', function(){
      expect(character.numericEvaluator('12345gh')).to.equal(false)
    })
    it('fails when the input contains whitespace', function() {
      expect(character.numericEvaluator('12 345')).to.equal(false)
    })
  })
})
