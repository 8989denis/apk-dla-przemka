// Denis Kontek 3h
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let czas_na_klikniecie,punkty = 0
let czas_pojawiania = 2000
let czas_znikania = 1000
const max = 1024 - 150
const gra = document.querySelector('#game')
const kwadrat = document.createElement('div')
kwadrat.className = 'kwadrat'
kwadrat.addEventListener('click',function() {
    clearInterval(czas_na_klikniecie)
    kwadrat.style.display = "none"
    ++punkty
    if(czas_pojawiania-300 >= 0 ) {
        czas_pojawiania = getRandomInt(czas_pojawiania-300,czas_pojawiania)
    }else {
        czas_pojawiania = getRandomInt(czas_pojawiania,czas_pojawiania)
    }
    if(czas_znikania-100 >= 0 ) {
        czas_znikania = getRandomInt(czas_znikania-100,czas_znikania)
    } else {
        czas_znikania = getRandomInt(czas_znikania,czas_znikania)
    }
    render_kwadratu()
})
function render_kwadratu() {
    setTimeout(()=>{
        kwadrat.style.top = getRandomInt(0,max) + "px"
        kwadrat.style.left = getRandomInt(0,max) + "px"
        gra.appendChild(kwadrat)
        czas_na_klikniecie = setInterval(() => {
            // zabezpieczenie ukrywania błędu
            if(document.body){ 
                clearInterval(czas_na_klikniecie)
                document.body.remove()
            }
            alert(`Koniec gry udało ci sie zdobyć ${punkty} punktów!`)
        },czas_znikania)
        kwadrat.style.display = "block"
    },czas_pojawiania)
}
function main() {
    render_kwadratu()
}
document.querySelector('button').addEventListener('click',function() {
    this.remove()
    main()
})  