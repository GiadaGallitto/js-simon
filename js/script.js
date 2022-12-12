const button = document.getElementById(`button`);

let counter = 0;

let gameOver = false;

button.addEventListener(`click`, function(){

    button.innerHTML = `# ${counter} `

    if(!gameOver) {
        if (counter < 10){
            counter++;
        } else {
            gameOver = true;

            setTimeout(() => {
                gameOver = false;
                counter = 0;
                button.innerHTML = `# ${counter} `;
            }, 10000);
        }
    }
})