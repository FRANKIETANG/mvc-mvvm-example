import $ from 'jquery'

/*这里是 M */
let frankie = {
    _data: {
        age: 18,
        name: 'frankie'
    }
}

/*这下面都是 VM */
for (let key in frankie._data) {
    Object.defineProperty(frankie, key, {
        get: () => {
            console.log(`frankie.${key} 被读取了`)
            return frankie._data[key]
        },
        set: xxx => {
            console.log(`frankie.${key} 被设置了`)
            $(`input[name="${key}"]`).val(xxx)  // 设置对象就改 input
            frankie._data[key] = xxx
            // console.log(frankie)
        }
    })
}

$('form').on('input', 'input[name]', e => {
    let $input = $(e.currentTarget) // 获取 input
    let name = $input.attr('name')  // 获取名字
    let value = $input.val()  // 获取值
    frankie[name] = value  // 让 name 等于 value
})

$('input[name="name"]').val(frankie.name)
$('input[name="age"]').val(frankie.age)

$('form').on('submit', e => {
    e.preventDefault()
    // console.log(frankie)
})

// setInterval(() => {
//     frankie.age++
// },1000)

console.log(1)

frankie.age = 20
console.log($('input[name="age"]').val())

console.log(2)