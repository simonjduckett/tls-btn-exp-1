let buttons = document.getElementsByClassName('btn')

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === 'Get Quotes') {
        buttons[i].innerHTML = 'Get my quotes'
    }
}