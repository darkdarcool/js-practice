class make {
	constructor(value) {
		this.list = value;
	}
	createlist() {
		var stuff = this.list.split(" ");
		return stuff;
	}
	createstring() {
		var stuff = this.list;
		return stuff.join("");
	}
}
function main() {
	mylist = new make("H e l l o  W o r l d ! ")
	mystuff = mylist.createlist()
	return mystuff
}
let stuff = main();
console.log(stuff);
module.exports = main;