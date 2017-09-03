const m = require("mithril")

let settings = {

    time: {

        main: {
            options: [5, 10, 15, 20, 30, 45],
            initial: 10,
        },

        byo: {
            options: [10, 20, 30, 45, 60],
            initial: 30
        },
        byoN: {
            options: [5, 10],
            initial: 5
        }
    },
    players: ['black', 'white']
};

module.exports = settings