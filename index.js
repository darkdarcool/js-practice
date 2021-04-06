class make {
	constructor(value) {
		this.list = value
	}
	createlist() {
		var stuff = this.list.split(" ")
		return stuff 
	}
	createstring() {
		var stuff = this.list
		return stuff.join("")
	}
}
function main() {
	mystuff = ["Hello ", "world!"]
	myListData = new make(mystuff)
	mylist = myListData.createstring()
	//console.log(mylist) 
}
module.exports = main()