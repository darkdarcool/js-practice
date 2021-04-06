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
mystuff = ["Hello ", "world!"]
myListData = new make(mystuff)
mylist = myListData.createstring()
console.log(mylist) 
