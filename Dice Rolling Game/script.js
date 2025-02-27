function rollDice(){
    const noDice = document.getElementById("input").value;
    const values = document.getElementById("values");
    const images = document.getElementById("images");

    const randomDice = [];
    const imagesarr = [];

    for (let i = 0; i < noDice; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        randomDice.push(num);
        imagesarr.push(`<img src="./images/${num}d.png">`)
    }

    values.innerHTML = `Dice: ${randomDice.join(", ")}`;
    images.innerHTML = imagesarr.join('');
}