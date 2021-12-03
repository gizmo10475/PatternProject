import m from "mithril";
// import m from "mithril";
import "mithril-component";




var TimerComponent = m.createComponent({
  controller: function () {
    return this.startClock()
  },

  startClock: function () {
    var component = this
    this.state.seconds = 0
    this.state.clock = setInterval(function () {
      component.state.seconds++
      component.setState(component.state)
    }, 1000)

    return this.state
  },

  stopClock: function () {
    clearInterval(this.state.clock)
  },

  onUnload: function () {
    this.stopClock()
  },

  view: function (ctrl) {
    return m('div.timer-component', this.state.seconds);
  }
})

m.mount(document.body, TimerComponent())

export default TimerComponent;

