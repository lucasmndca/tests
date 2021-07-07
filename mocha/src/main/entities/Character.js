class Character {
    constructor(name = '', attack = 0, defense = 0, level = 1) {
        this.name = name
        this.attack = attack 
        this.defense = defense 
        this.level = level
    }

    increaseAttack(toBeIncreased) {
        const willSurpassLimit = (this.attack + parseInt(toBeIncreased)) > 3000
        if (willSurpassLimit) {
            this.attack = 3000
        } else {
            this.attack += parseInt(toBeIncreased)
        }
    }

    decreaseAttack(tobeDecreased) {
        const willBeLowerThanZero = (this.attack - tobeDecreased) < 0
        if (willBeLowerThanZero) {
            this.attack = 0
        } else {
            this.attack -= parseInt(tobeDecreased)
        }
    }

    increaseDefense(toBeIncreased) {
        const willSurpassLimit = (this.defense + toBeIncreased) > 3000
        if (willSurpassLimit) {
            this.defense = 3000
        } else {
            this.defense += parseInt(toBeIncreased)
        }
    }

    decreaseDefense(tobeDecreased) {
        const willBeLowerThanZero = (this.defense - tobeDecreased) < 0
        if (willBeLowerThanZero) {
            this.defense = 0
        } else {
            this.defense -= parseInt(tobeDecreased)
        }
    }

    increaseLevel() {
        this.level = (this.level + 1) > 15 ? 15 : this.level + 1
    }

    changeName(newName) {
        this.name = `${newName ?? 'No Name'}`
    }
}

module.exports = Character