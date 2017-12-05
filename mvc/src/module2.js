import Controller from './Controller'
import $ from 'jquery'

new Controller({
    element: '.module2',
    template: `
        <input type="text" name="number2" value="{{output}}">
        <button name="button2">点我</button>  
        <div class="output">{{output}}</div>  
    `,
    data: {
        output: ''
    },
    events: {
        'change input': 'onChangeInput',
        'click button': 'onClickButton'
    },
    onClickButton(e) {
        let value = this.$element.find('input').val()
        this.data.output = value
        this.render()
    },
    onChangeInput(e) {
        let input = e.currentTarget
        console.log(input.value)
    }
})