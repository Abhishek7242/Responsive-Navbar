

let hamBtn = document.getElementById('hamBtn')
let potraitNav = document.getElementById('potraitNav')
hamBtn.addEventListener('click', () => {
    potraitNav.style.display = 'flex'
    setTimeout(() => {
        potraitNav.style.left = '0px'

    }, 100);
})
let cancelHam = document.getElementById('cancelHam')
cancelHam.addEventListener('click', () => {
    potraitNav.style.left = '-400px'
    setTimeout(() => {

        potraitNav.style.display = 'none'
    }, 200);
})