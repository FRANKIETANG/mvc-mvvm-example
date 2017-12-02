import Controller from './Controller'

new Controller({
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