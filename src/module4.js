import Controller from './Controller'
import $ from 'jquery'

new Controller({
    element: '.module4',
    template: `
        <button name="decrease"> - </button>
        <span>{{number}}</span>
        <button name="increase"> + </button>
    `,
    data: {
        number: 0
    },
    init() {
        $.get('/data.json').then((response) => {
            this.data = response
            this.render()
        })
    },
    events: {
        'click button[name=increase]': 'increase',
        'click button[name=decrease]': 'decrease'
    },
    increase() {
        this.remoteIncrease().then(() => {
            this.data.number += 1
            this.render()
        })
    },
    decrease() {
        this.remoteDecrease().then(() => {
            this.data.number -= 1
            this.render()
        })
    },
    remoteIncrease() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('500ms')
                resolve({
                    number: this.number + 1
                })
            }, 500)
        })
    },
    remoteDecrease() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('500ms')
                resolve({
                    number: this.number - 1
                })
            }, 500)
        })
    }
})