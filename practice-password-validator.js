const readline = require('readline-sync');

function validPassword(password) {
let hasUpperCase = false;
 let hasNumber = false;
 let length = password.length >= 8;

for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } 
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
}

   return length && hasUpperCase && hasNumber;
}

let password;
do{
    password = readline.question("Enter your password: ");
    if (!validPassword(password)) {
        console.log(`Invalid Password! Please make sure it:
            - contains at least 8 characters
            - has at least one uppercase letter
            - has at least one number.`);
    }
} while(!validPassword(password));
console.log("Access granted!");

