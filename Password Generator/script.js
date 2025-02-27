function generatePass(){
    const isUpper = document.getElementById("isUpper").checked;
    const isLower = document.getElementById("isLower").checked;
    const isNumber = document.getElementById("isNumber").checked;
    const isSymbol = document.getElementById("isSymbol").checked;
    const length = document.getElementById("length").value;
    const pass = document.getElementById("password");
    
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "!@#$%^&*()_+";

    let password = "";
    let fullLen = "";

    if(isLower || isUpper || isNumber || isSymbol){
        fullLen += isLower ? lower : "";
        fullLen += isUpper ? upper : "";
        fullLen += isNumber ? number : "";
        fullLen += isSymbol ? symbol : "";

        for(let i = 0; i<length; i++){
            password += fullLen.charAt(Math.floor(Math.random() * fullLen.length));
        }

        pass.innerText="Password:"+" "+ password;
    }
    else{
        alert("Please select at least one option");
    }
}

