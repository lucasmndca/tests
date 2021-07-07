class LowerThanZeroException extends Error {

    constructor(value) {
        super()
        this.value = value;
        this.message = " cannot be lower than zero!";
    }

    toString() {
        return this.value + this.message;
    }
}

module.exports = LowerThanZeroException