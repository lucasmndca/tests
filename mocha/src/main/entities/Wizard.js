const Character = require("./Character");
const LowerThanZeroException = require('../assets/exceptions/LowerThanZeroException')

class Wizard extends Character {
    constructor(name = 'New Wizard', attack = 0, defense = 0, level = 1) {
        super(name, attack, defense, level)
        this.abilities = []
        this.mana = 0
    }

    increaseMana() {
        const willSurpassLimit = (this.mana + 100) > 1500
        if (willSurpassLimit) {
            this.mana = 1500
        } else {
            this.mana += 100
        }
    }

    consumeMana(toBeConsumed = 100) {
        try {
            const WillBeLowerThanZero = (this.mana - toBeConsumed) < 0
            if (WillBeLowerThanZero) {
                throw new LowerThanZeroException('Mana')
            } else {
                this.mana -= toBeConsumed
            }

        } catch (error) {
            console.error(error)
        }
    }

    addAbility() {

    }

    removeAbility() {

    }
}

module.exports = Wizard