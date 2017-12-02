import Controller from './Controller'

new Controller({
    element: '.module3',
    template: '#module3Template',
    // template: `
    //     <button name="decrease"> - </button>
    //     <span>{{number}}</span>
    //     <button name="increase"> + </button>
    // `,
    data: {
        number: 0
    },
    events: {
        'click button[name=increase]': 'increase',
        'click button[name=decrease]': 'decrease'
    },
    increase(){
        this.data.number += 1
        this.render()
    },
    decrease(){
        this.data.number -= 1
        this.render()
    }    
})