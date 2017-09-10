const m = require('mithril')

let settings = {

	players: ["black", "white"],
	
	timecats: ['main', 'byo', 'byoN'],
	main: 10,
	byo: 30,
	byoN: 5,

	main_options: [5,10,15,20,30,45],
	byo_options: [10,30,60],
	byoN_options: [5,10],

	main_default: 10,
	byo_default: 30,
	byoN_default: 5
}

module.exports = settings