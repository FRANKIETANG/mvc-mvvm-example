import Controller from './Controller'
import $ from 'jquery'

new Controller({
    element: '.module2',
    events: {
        'change input': 'onChangeInput',
        'click button': 'onClickButton'
    },
    onClickButton(e) {
        let value = this.$element.find('input').val()
        this.render(value)
    },
    onChangeInput(e) {
        let input = e.currentTarget
        console.log(input.value)
    },
    render(value) {
        let $output = this.$element.find('.output')
        if ($output.length === 0) {
            $output = $('<div class="output"></div>').text(value)
            $output.appendTo(this.$element)
        } else {
            $output.text(value)
        }
    }
})