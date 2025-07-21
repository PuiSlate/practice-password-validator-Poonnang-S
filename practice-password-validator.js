const readline = require('readline-sync');

function validPassword(password) {
    const minlength = password.length >=8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return minlength && hasUppercase &&hasNumber;
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

