let frankie = {
    _data: {
        age: 18,
        name: 'frankie'
    }
}

Object.defineProperty(frankie, 'age', {
    get: () => {
        console.log('frankie.age 被读取了')
        return frankie._data.age
    },
    set: xxx => {
        console.log('frankie.age 被设置了')
        frankie._data.age = xxx
    }
})

frankie.age = 19  // frankie.age 被设置了
frankie.age = 20  // frankie.age 被设置了
frankie.age = 21  // frankie.age 被设置了
console.log(frankie.age)  // frankie.age 被读取了 21