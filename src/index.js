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
}
function getelem(list) {
	test = Array.isArray(list)
	if (test == true) {	
		return list.length
	}
	else {
		throw new Error(`${list} is not a list!`)
	}
}

module.exports = getelem;