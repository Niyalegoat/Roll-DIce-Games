function rollDice(){
    const numOFDice = document.getElementById("numOFDice").ariaValueMax;
    const diceReult = document.getElementById("diceResult");
    const diceimages = document.getElementById("diceimages");
    const value = [];
    const images = [];

    for(let i = 0; i <numOFDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        //console.log(value);use this to check
        value.push(value);
        images.push(`<img src="img/${value}.png">`)
    }
    diceReult.textContent = `dice:${values.join('.')}`;//play the game.ht roll dice to see
    diceimages.innerHTML = images.join('');
}