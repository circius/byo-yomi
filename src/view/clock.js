const m = require("mithril");
const time = require("../model/time")

module.exports = {
	view: function(vnode) {
		const player = vnode.attrs.player;
		const playerTime = time[player]
		return m("."+player, [

			m(".main", playerTime.main),
			m(".byoX", playerTime.byoX),
			m(".byoN", playerTime.byoN)
			]);
	}
};