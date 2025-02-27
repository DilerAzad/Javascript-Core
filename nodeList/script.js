//NodeList = Static collection of HTML elements by (id, class, element)
//           Can be created by using querySelectorAll()
//           Similar to an array, but no (map, filter, reduce)
//           NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.addEventListener("mouseout",(event) =>{
        event.target.style.backgroundColor = "rgb(0, 136, 255)";
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseover",(event) =>{
        event.target.style.backgroundColor = "lightgreen";
    })
});

