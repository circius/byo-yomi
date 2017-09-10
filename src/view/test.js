const m = require('mithril')

const cats = {
	index: ['poems', 'songs', 'epics'],
	poems: ['arthur', 'beagle', 'compost'],
	songs: ['honey', 'waxwork', 'enterprise'],
	epics: ['kanterwuffle', 'sheezum', 'unhe']
}

let state = {
	name : "",
	setName : function(name){
		state.name = name
		console.log(state.name)
	}
}


let dropdown = {
	view: function(vnode){
		cat = vnode.attrs.cat;
		return m("select", {onchange: m.withAttr("value", state.setName)},
		cats[cat].map(e => {
			return m("option", e)
		})
	)		
}
}

let menu = {

	view: function(){
		return m("main", cats["index"].map(cat => {
			return m(dropdown, {cat: cat})
		})
		)}
	}

module.exports = menu

    //"start": "webpack src/index.js bin/app.js --watch"
