let m = require("mithril")
let s = require("./settings")

function Time(main, byo, byoN){
	this.main = 60*main;
	this.byo = byo;
	this.byoN = byoN;
}

let main = s.main
let byo = s.byo
let byoN = s.byoN

let times = {

	black: new Time(main, byo, byoN),
	white: new Time(main, byo, byoN),

	count : function(player) {
		let cur = times[player]
		if (cur.main > 0) {
			cur.main -= 1;
		} else if (cur.byoN > 0) {
			cur.main = cur.byo;
			cur.byoN -=1;
		} else if(cur.byoN === 0) {
			return 'end';
		}
}
}
module.exports = times