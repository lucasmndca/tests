const assert = require('assert')
const chai = require('chai')
const expect = chai.expect

const Wizard = require('../../main/entities/Wizard')

describe('Wizard', () => {

    it('it should initialize properly', () => {
        let wizard = new Wizard()
        assert.notDeepStrictEqual(null, wizard)
        assert.notDeepStrictEqual(null, wizard.mana)
        assert.notDeepStrictEqual(null, wizard.abilities)

        assert.strictEqual(0, wizard.abilities.length)
        assert.strictEqual(0, wizard.mana)
    })

    describe('Mana factor', () => {

        const MANA_LIMIT = 1500
        
        it('should increase mana limit', () => {
            let wizard = new Wizard()
            wizard.increaseMana()
            assert.strictEqual(100, wizard.mana)
        })

        it('should not surpass mana limit of 1500', () => {
            let wizard = new Wizard()
            wizard.mana = MANA_LIMIT
            wizard.increaseMana()
            assert.strictEqual(MANA_LIMIT, wizard.mana)
        })

        it('should consume mana', () => {
            let wizard = new Wizard()
            wizard.mana = MANA_LIMIT
            wizard.consumeMana(500)
            assert.strictEqual(1000, wizard.mana)
        })

    })

})