import Controller from './Controller'

new Controller({
    element: '.module1',
    events: {
        'change input': 'onChangeInput',
        'click button': 'addToCart'
    },
    addToCart() {
        // console.log(this)
        let value = this.$element.find('input').val()
        this.remoteAddCart(value).then(() => { // 假如发送到服务器让服务器知道你已经把什么放到购物车了，下次登录的时候就可以获取数据。
            this.showAnimation() // 加入到购物车的动画
        })
    },
    remoteAddCart() {
        console.log('远程请求')
        // $.ajax ....
        // return Promise
        return Promise.resolve(1)
    },
    showAnimation() {
        console.log('展示添加到购物车的动画')
        // this.$element.animate('...')
    },
    onChangeInput(e) {
        let input = e.currentTarget
        console.log(input.value)
    }
})