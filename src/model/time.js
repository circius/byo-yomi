const m = require("mithril")
const s = require("./settings")



function Time([main, byo, byoN]){
	this.main = 60*main;
	this.byo = byo;
	this.byoN = byoN;
}


let times = {

	settings: [],

	loadSettings: function() {
	return times.settings = s.time.map(category => settings.append(category.initial));
	},

	loadTimes: function (){
		times.loadSettings;
		times.black = new Time(times.settings);
		times.white = new Time(times.settings);
		return
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
	
// 	count: function(player, time) {


// 		let current = times[player]
// 		current[time] -= 1;
// }
}
}
module.exports = times