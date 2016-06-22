var expect = require('chai').expect
var Character = require('../office_char')

describe('When I sign up a character', function(){
	it('should not allow blank input in any field', function(){
    var character = new Character()

    var dwight = {
      firstName: 'Dwight',
      lastName: ''
    }
    expect(character.signup(dwight)).to.equal(false)
	})
  it('should allow users with a first and last name', function(){
    var character = new Character()

    var dwight = {
      firstName: 'Dwight',
      lastName: 'Shrute'
    }
    expect(character.signup(dwight)).to.equal(true)

  })
  it('input cannot contain whitespace', function(){
    var character = new Character()
        var dwight = {
          firstName: 'Dwight',
          lastName: 'Sh rute'
        }
    expect(character.signup(dwight)).to.equal(false)
  })
  it('cannot have input less than 3 characters', function(){
    var character = new Character()
    var dwight = {
      firstName: 'Dwight',
      lastName: 'Sh'
    }
    expect(character.signup(dwight)).to.equal(false)
  })
  it('cannot have input more than 25 characters', function() {
    var character = new Character()
    var dwight = {
      firstName: 'Dwight',
      lastName: 'asasasasasasasasasasasasas'
    }
    expect(character.signup(dwight)).to.equal(false)
  })
  it('cannot contain numeric input', function(){
    var character = new Character()
    var dwight = {
      firstName: 'Dwight',
      lastName: 'asasasas23'
    }
    expect(character.signup(dwight)).to.equal(false)
  })
  it('cannot contain non aphebetical characters', function(){
    var character = new Character()
    var dwight = {
      firstName: 'Dwight',
      lastName: '@!#$%^&*()_'
    }
    expect(character.signup(dwight)).to.equal(false)

  })
})
