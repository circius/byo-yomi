const m = require("mithril")
const s = require("./settings")

const times = {

	black: {},
	white: {},

	time: function Time(main, byo, byoN){
	this.main = 60*main;
	this.byo = byo;
	this.byoN = byoN;
},

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