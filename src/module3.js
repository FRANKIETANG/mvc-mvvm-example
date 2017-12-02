import $ from 'jquery'

/*module3*/
let $module3 = $('.module3')

$module3.on('change', 'input', ()=>{
    console.log('change3')
})
$module3.on('click', 'button', ()=>{
    console.log('click3')
})