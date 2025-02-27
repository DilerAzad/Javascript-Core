// eventListener = Listen for specific events to create interactive web pages
//                  events: click, mouseover, mouseout
//                  •addEventListener(click, callback);

const myBox = document.getElementById("MyBox");


myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch!! 🤕"
});

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😮";
});

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "rgb(127, 255, 155)";
    event.target.textContent = "Click Me 😁"
});