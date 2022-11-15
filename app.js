const selectors = {
    modeDark: '[data-mode-dark]',
    buttonModeDark: '[data-button-mode-dark]'
}

const onModeDark = document.querySelector(selectors.modeDark)
const onButtonModeDark = document.querySelector(selectors.buttonModeDark)

onButtonModeDark.addEventListener('click', function() {
    onModeDark.classList.toggle('color_dark')
})











