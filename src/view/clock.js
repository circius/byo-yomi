const m = require("mithril");
const time = require("../model/time")

const formatSecs = function (n) {
	return n > 9? "" + n : "0" + n;
}

const formatMinSecs = function (n) {
	const mins = Math.floor(n/60);
	const secs = formatSecs(n - mins * 60);
	return (mins + ":" + secs);
}

const formatByo = function (a) {
	return '+' + a[0] + 'x' + a[1] + 's';
}

module.exports = {
	view: function(vnode) {
		const player = vnode.attrs.player;
		const playerTime = time[player]
		return m("."+player+'-clock', [
			m(".main", formatMinSecs(playerTime.main)),
			m(".byo", formatByo([playerTime.byoN, playerTime.byo]))
			])
	},
}