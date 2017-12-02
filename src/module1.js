import $ from 'jquery'

/*module1*/
// let $module1 = $('.module1')

// $module1.on('change', 'input', ()=>{
//     console.log('change1')
// })
// $module1.on('click', 'button', ()=>{
//     console.log('click1')
// })

function Maker(options) {
    this.$element = $(options.element)
    this.events = options.events
    this.bindEvents()
}

Maker.prototype.bindEvents = function () {
    for (let key in this.events) {
        let parts = key.split(' ')
        let eventType = parts.shift()
        let selector = parts.join(' ')
        this.$element.on(eventType, selector, this.events[key])
    }
}

new Maker({
    element: '.module1',
    events: {
        'change input': e => {
            console.log('change1')
        },
        'click button': e => {
            console.log('click1')
        }
    }
})