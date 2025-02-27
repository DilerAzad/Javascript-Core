// eventListener = Listen for specific events
//                  to create interactive web pages
//                  events: keydown, keyup document. 
//                  -> addEventListener(event, callback);

const element = document.getElementById("container");
const movement = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",event =>{
    event.preventDefault();
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                x -= movement;
                break;
            
            case "ArrowDown":
                x += movement;
                break;
            
            case "ArrowLeft":
                y -= movement;
                break;

            case "ArrowRight":
                y += movement;
                break;
        }

        element.style.top = `${x}px`;
        element.style.left = `${y}px`;
    }
});
