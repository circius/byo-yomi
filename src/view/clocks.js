let m = require("mithril")
const clock = require("./clock")
const time = require("../model/time")
const settings = require("../model/settings")

const players = settings.players;
let current = 0;

function counter(){
	setInterval(function(){
		let count = time.count(players[current])
		if (count === 'end') {alert('zing')}
		m.redraw()
}, 1000)
}

module.exports = {
	oninit: counter,
	view: function() {
		return m(".clocks", [
			m(".black", m(clock, {player:"black"})),
			m(".white", m(clock, {player:"white"})),
		])
}
};