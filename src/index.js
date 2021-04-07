class make {
    constructor(value) {
        this.list = value;
    }
    createlist(type) {
        if (type == '--strong') {
            var stuff = this.list.split("");
            return stuff;
        }
        if (type == '--weak') {
            var stuff = this.list.split(" ")
            return stuff
        } 
        else {
            throw new Error(`${type} is not a valid flag`)
        }
    }
    createstring() {
        var stuff = this.list;
        return stuff.join("");
    }
    getelem() {
        this.test = Array.isArray(this.list)
        if (this.test == true) {	
            return this.list.length
        }
        else {
            throw new Error(`${this.list} is not a list!`)
        }
    }
}
stuff = ['H', 'e', 'l', 'l', 'o', '!']
let sun = new make(stuff)

console.log(mystuff)
module.exports = make;