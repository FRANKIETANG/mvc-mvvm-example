import $ from 'jquery'

class Controller {
    constructor(options) {
        this.$element = $(options.element)
        this.events = options.events
        this.bindEvents()
    }
    bindEvents() {
        for (let key in this.events) {
            let parts = key.split(' ')
            let eventType = parts.shift()
            let selector = parts.join(' ')
            this.$element.on(eventType, selector, this.events[key])
        }
    }
}

export default Controller