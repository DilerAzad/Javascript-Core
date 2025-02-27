const img = document.getElementById("myImg");
const button = document.getElementById("myButton");

button.addEventListener("click", (event) =>{
    if(img.style.visibility === "hidden"){
        img.style.visibility = "visible";
        button.textContent = "Hide"
    }else{
        img.style.visibility = "hidden";
        button.textContent = "Show"
    }
});