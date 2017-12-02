import $ from 'jquery'

/*module2*/
let $module2 = $('.module2')

$module2.on('change', 'input', ()=>{
    console.log('change2')
})
$module2.on('click', 'button', ()=>{
    console.log('click2')
})
