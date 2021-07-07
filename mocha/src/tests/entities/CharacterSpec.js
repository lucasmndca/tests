const assert = require('assert')
const Character = require('../../main/entities/Character')

describe('Character', () => {

  const CHARACTER_NAME = 'Test Character'

  it('should initialize properly', () => {
    let character = new Character(CHARACTER_NAME, 40, 25, 1)
    assert.notStrictEqual(null, character)
    assert.strictEqual(4, Object.keys(character).length)
  })

  describe('Attack attribute', () => {
    
    it('should increase attack passing number as param', () => {
      let character = new Character(CHARACTER_NAME, 40, 25, 1)
      character.increaseAttack(40)
      assert.strictEqual(80, character.attack)
    })
  
    it('should increase attack passing number as string', () => {
      let character = new Character(CHARACTER_NAME, 40, 25, 1)
      character.increaseAttack('50')
      assert.strictEqual(90, character.attack)
    })
  
    it('should decrease attack passing number as param', () => {
      let character = new Character(CHARACTER_NAME, 40, 25, 1)
      character.decreaseAttack(40)
      assert.strictEqual(0, character.attack)
    })
  
    it('should decrease attack passing number as string', () => {
      let character = new Character(CHARACTER_NAME, 40, 25, 1)
      character.decreaseAttack('40')
      assert.strictEqual(0, character.attack)
    })

    it('should not surpass 3000', () => {
      let character = new Character(CHARACTER_NAME, 2900, 25, 13)
      character.increaseAttack(200)
      assert.strictEqual(3000, character.attack)
    })

    it('should not be lower than 0', () => {
      let character = new Character(CHARACTER_NAME, 100, 25, 13)
      character.decreaseAttack(500)
      assert.strictEqual(0, character.attack)
    })
    
  })

  describe('Defense attribute', () => {
    
    it('should increase defense passing number as param', () => {
      let character = new Character(CHARACTER_NAME, 0, 50, 1)
      character.increaseDefense(50)
      assert.strictEqual(100, character.defense)
    })
  
    it('should increase defense passing number as string', () => {
      let character = new Character(CHARACTER_NAME, 0, 25, 1)
      character.increaseDefense('50')
      assert.strictEqual(75, character.defense)
    })
  
    it('should decrease defense passing number as param', () => {
      let character = new Character(CHARACTER_NAME, 0, 25, 1)
      character.decreaseDefense(20)
      assert.strictEqual(5, character.defense)
    })
  
    it('should decrease defense passing number as string', () => {
      let character = new Character(CHARACTER_NAME, 100, 100, 1)
      character.decreaseDefense('40')
      assert.strictEqual(60, character.defense)
    })

    it('should not surpass 3000', () => {
      let character = new Character(CHARACTER_NAME, 25, 2900, 13)
      character.increaseDefense(200)
      assert.strictEqual(3000, character.defense)
    })

    it('should not be lower than 0', () => {
      let character = new Character(CHARACTER_NAME, 100, 25, 13)
      character.decreaseDefense(500)
      assert.strictEqual(0, character.defense)
    })

  })

  describe('Level attribute', () => {

    it('should not surpass 15', () => {
      let character = new Character(CHARACTER_NAME, 0, 0, 15)
      character.increaseLevel()
      assert.strictEqual(15, character.level)
    })
    
  })

  describe('Name attribute', () => {

    it('should change name', () => {
      let character = new Character(CHARACTER_NAME, 0, 0, 15)
      character.changeName('John Doe')
      assert.strictEqual('John Doe', character.name)
    })

    it('should change name even if numbers are passed', () => {
      let character = new Character(CHARACTER_NAME, 0, 0, 15)
      character.changeName('John_Doe1')
      assert.strictEqual('John_Doe1', character.name)
    })

    it('should change name even if only numbers are passed', () => {
      let character = new Character(CHARACTER_NAME, 0, 0, 15)
      character.changeName(123)
      assert.strictEqual('123', character.name)
    })

    it('should change name to placeholder if nothing is passed', () => {
      let character = new Character(CHARACTER_NAME, 0, 0, 15)
      character.changeName()
      assert.strictEqual('No Name', character.name)
    })

  })

})
