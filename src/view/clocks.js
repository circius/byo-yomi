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

    setInterval(function() {
        if (state.counting === true) {
            let count = time.count(players[state.current])
            count === "end" ? out_of_time : null
            m.redraw()
        }
    }, 1000)
}

const out_of_time = function () {
    alert(players[state.current] + " out of time");
    return window.location = "./index.html";
}

const button_pause = {
    view: function() {
        return m("button", {
            onclick: function() {
                this.innerHTML === "pause" ? this.innerHTML = "unpause" : this.innerHTML = "pause"
                state.counting ? state.counting = false : state.counting = true 
            }
        }, "pause")
    }
}

const button_exit = {
    view: function() {
        return m("button", {
            onclick: function() {
                confirm("Quit?") ? window.location = "./index.html" : null
                }}, 
            'exit'
    )
}
}


const clocks = {
    oninit: init,
    oncreate: function () {
        document.querySelector(`.${players[state.current]}`).classList.toggle("current")
        state.counting = true
    },
    switch: function() {
        document.querySelector(`.${players[state.current]}`).classList.toggle("current")
        state.current === 0 ? state.current = 1 : state.current = 0
        document.querySelector(`.${players[state.current]}`).classList.toggle("current")
    },

    view: function() {
        return m(".container", [
            m(".clocks",[
                m(".black.player", m(clock, { player: "black" })),
                m(".white.player", m(clock, { player: "white" })),
            ]),
            m(".clocks-menu", [
              m(button_pause),
              m(button_exit)
            ])
        ])
    }

}

module.exports = clocks