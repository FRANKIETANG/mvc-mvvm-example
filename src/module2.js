import Controller from './Controller'

new Controller({
    element: '.module2',
    events: {
        'change input': e => {
            console.log('change2')
        },
        'click button': e => {
            console.log('click2')
        }
    }
})