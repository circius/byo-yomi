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
    	return m(".menu", [
            m(".menu-main", "main time: ", [
                m(dropdown, {cat: 'main', options: s["main_options"]}),
                m('span', 'mins'),
                m("br")]),
            m(".menu-byo", "byo-yomi: ", [
                m('span', '+'),
                m(dropdown, {cat: 'byoN', options: s["byoN_options"]}),
                m("span", "x"),
                m(dropdown, {cat:'byo', options: s["byo_options"]}),
                m("span", "secs", m('br'))
                ]),
            m("br"),
            m("span",  "🡺"),
            m(start)
            ])
    }
}

const start = {
	view: function(vnode) {
    return m("a.start-button", {
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
			])
	}
}

module.exports = main