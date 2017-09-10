let m = require("mithril");

let clocks = require("./view/clocks");
let menu = require("./view/menu");

m.route(document.body, "/menu", {
	"/menu": {
		view: () => {
			return m(menu)
		}
	},
	"/clocks": {
		view: () => {
			return m(clocks)
		}
	}
})