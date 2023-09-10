const button = document.querySelector('#dropdown_btn')
const burgerList = document.querySelector('#dropdown_menu')

button.addEventListener('click', function(){
    burgerList.classList.toggle('hidden')
})
