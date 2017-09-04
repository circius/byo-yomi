let m = require("mithril")

module.exports = {
	view: function() {
		return m(".menu", m("a", {
			href: "/clocks",
			oncreate:m.route.link
		}, 'start'))
	}
};