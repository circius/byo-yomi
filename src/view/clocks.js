const m = require("mithril")
const clock = require("./clock")
const time = require("../model/time")
const s = require("../model/settings")
const state = require("../model/state")
const players = state.players

const init = function() {
    window.addEventListener('keyup', clocks.switch)
    window.addEventListener('touchend', clocks.switch)

    time.black = new time.time(s.main, s.byo, s.byoN)
    time.white = new time.time(s.main, s.byo, s.byoN)

    state.counting = true;

    setInterval(function() {
        console.log(players[state.current])
        if (state.counting === true) {
            let count = time.count(players[state.current])
            count === "end" ? alert(players[state.current] + " out of time") : null
            m.redraw()
        }
    }, 1000)
}

const pause = {
    view: function() {
        return m("button", {
            onclick: function() { state.counting ? state.counting = false : state.counting = true }
        }, "Pause / Unpause")
    }
}

const exit = {
    view: function() {
        return m("button", {
            onclick: function() {
                window.location = "./index.html"
                }}, 
            'exit'
    )
}
}


const clocks = {
    oninit: init,
    switch: function() {
        state.current === 0 ? state.current = 1 : state.current = 0
    },

    view: function() {
        return m(".clocks", [
            m(".black", m(clock, { player: "black" })),
            m(".white", m(clock, { player: "white" })),
            m(pause),
            m(exit)
        ])
    }

}

module.exports = clocks