import Controller from './Controller'
import $ from 'jquery'

let model = {
    data: {
        number: 0
    },
    get() {
        return $.get('/data.json').then((response) => {
            this.data = response
            return this.data
        })
    },
    increase() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('500ms')
                this.data.number += 1
                resolve(this.data)
            }, 500)
        })
    },
    decrease() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('500ms')
                this.data.number -= 1
                resolve(this.data)
            }, 500)
        })
    }
}


new Controller({
    element: '.module4',
    template: `
        <button name="decrease"> - </button>
        <span>{{number}}</span>
        <button name="increase"> + </button>
    `,
    model: model,
    events: {
        'click button[name=increase]': 'increase',
        'click button[name=decrease]': 'decrease'
    },
    init() {
        this.model.get().then(() => {
            this.render()
        })
    },
    increase() {
        this.model.increase().then(() => {
            this.render()
        })
    },
    decrease() {
        this.model.decrease().then(() => {
            this.render()
        })
    }
})