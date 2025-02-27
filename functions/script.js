function happyBirthday(username, age){
    console.log('Happy Birthday too you \n');
    console.log(`Happy Birthday too ${username} \n`);
    console.log(`Happy Birthday age ${age} \n`);
    console.log('Happy Birthday too you \n');
}

function add(x, y){
    let result = x+y;
    return result;
}

function isEven(x){
    if(x%2 === 0){
        return true;
    }

    else{ 
        return false;
    }
}

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }

    else{
        return false;
    }
}

console.log(isValidEmail("Dilergmail.com"))