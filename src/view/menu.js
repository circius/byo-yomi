const m = require("mithril")
const s = require("../model/settings")
const t = require("../model/time")

const dropdown = {
    view: function(vnode) {
    	return m("select." + vnode.attrs.cat, {
            onchange: updateSetting
        },
        [vnode.attrs.options.map(option => {
            if (option === s[vnode.attrs.cat]){return m("option", {selected:"selected"}, option)}
            return m("option", option)
        })
    ])
}
}

const menu = {
    view: function (vnode) {
    	return m(".menu", vnode.attrs.cats.map(cat => {
        return m("." + cat, cat + ":", m(dropdown, { cat: cat, options: s[cat + "_options"] } ) ) } )
)}
}

const start = {
	view: function(vnode) {
    return m("a", {
        href: "/clocks",
        oncreate: m.route.link,
    }, 'start')
}
}

const updateSetting = function (e) {
    s[e.target.className] = Number(e.target.value)
}

const main = {
	view: function() {
		return m('container', [
			m(menu, {cats: s.timecats}),
			m(start)
			])
	}
}

module.exports = main