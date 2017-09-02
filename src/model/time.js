let m = require("mithril")
let settings = require("./settings")

function Time(main, byo, byoN){
	this.main = 60*main;
	this.byo = byo;
	this.byoN = byoN;
}

let times = {

	black: new Time(.1,5,5),
	white: new Time(10,5,5),

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
	
// 	count: function(player, time) {


// 		let current = times[player]
// 		current[time] -= 1;
// }
}
}
module.exports = times