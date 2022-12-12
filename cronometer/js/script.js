const tempo = document.getElementById(`tempo`);

const start = document.getElementById(`start`);

const pause = document.getElementById(`pause`);

const reset = document.getElementById(`reset`);

let secondi = 0;

let minuti = 0;

let int = null;

start.addEventListener(`click`, () => {
    if(int!== null){
        clearInterval(int);
    }

    int = setInterval(timeCounter, 10)

})

pause.addEventListener(`click`, () => {
    clearInterval(int)
})

reset.addEventListener(`click`, () => {
    clearInterval(int)
    secondi = 0;
    minuti = 0;
    tempo.innerHTML = `00 : 00`;
})

function timeCounter(){
    secondi += 1;

    if(secondi == 60){
        secondi = 0;
        minuti++;
    }
    
let m = minuti < 10 ? "0" + minuti : minuti;
    
let s = secondi < 10 ? "0" + secondi : secondi;
    
tempo.innerHTML = `${m} : ${s}  `
}
