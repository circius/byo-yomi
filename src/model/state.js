m = require("mithril")
s = require("./settings")

let state = {
	current: 0,
	players: s.players,
	counting: false
}

module.exports = state