const button = document.getElementById("btnMobile");


function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

button.addEventListener('click', toggleMenu)
button.addEventListener('touchstart', toggleMenu)