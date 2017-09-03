const m = require("mithril");

const clocks = require("./view/clocks");
const menu = require("./view/menu");

m.route(document.body, "/menu", {
	"/menu": {
		render: () => {
			return m(menu)
		}
	},
	"/clocks": {
		render: () => {
			return m(clocks)
		}
	}
})