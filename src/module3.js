import Controller from './Controller'

new Controller({
    element: '.module3',
    events: {
        'change input': e => {
            console.log('change3')
        },
        'click button': e => {
            console.log('click3')
        }
    }
})