import $ from 'jquery'

/*module1*/
let $module1 = $('.module1')

$module1.on('change', 'input', ()=>{
    console.log('change1')
})
$module1.on('click', 'button', ()=>{
    console.log('click1')
})