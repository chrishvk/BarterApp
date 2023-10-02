const img_prenda = document.querySelector('.img_prenda')
const imag = document.querySelectorAll('.imags')


imag.forEach(thumb => {
    thumb.addEventListener('click', function () {
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        img_prenda.src = this.src
    })
})
