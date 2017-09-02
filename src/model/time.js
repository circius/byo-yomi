let m = require("mithril")
let settings = require("./settings")

function Time(main, byoX, byoN){
	this.main = main;
	this.byoX = byoX;
	this.byoN = byoN;
}

let times = {
	//init 
	black: new Time(10,5,5),
	white: new Time(10,5,5),
	//interface
}


module.exports = times