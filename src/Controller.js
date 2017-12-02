import $ from 'jquery'

class Controller {
    constructor(options) {
        for (let key in options) {
            this[key] = options[key] // 把用户传的东西都放到 json
        }
        this.$element = $(this.element)
        this.bindEvents()
    }
    bindEvents() {
        for (let key in this.events) {
            let parts = key.split(' ')
            let eventType = parts.shift()
            let selector = parts.join(' ')
            if (typeof this.events[key] === 'function') {
                this.$element.on(eventType, selector, this.events[key])
            } else if (typeof this.events[key] === 'string') {
                let methodName = this.events[key]

                // let that = this
                // this.$element.on(eventType, selector, function (e) {
                //     that[methodName].call(that, e) // 保证这里的 this 就是当前对象
                // })

                // this.$element.on(eventType, selector, e => {
                //     this[methodName].call(this, e) // 保证这里的 this 就是当前对象
                // })

                this.$element.on(eventType, selector, this[methodName].bind(this))
            }
        }
    }
}

export default Controller