let m = require("mithril")
let clock = require("./clock")
const players = ["black", "white"];

module.exports = {
	view: function() {
		return m(".clocks", [
			m(".black", m(clock, {player:"black"})),
			m(".white", m(clock, {player:"white"}))
		])
}
};