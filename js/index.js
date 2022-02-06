const symbolValidEmail = ['@', '.'];
const symbolValidPassword = ['`', '!', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-'];

const [inputEmail, inputPassword] = document.getElementsByTagName('input');

 inputEmail.addEventListener('blur', isValidEmail);
inputPassword.addEventListener('blur' , isValidPassword);

function isValidEmail ({target: {value}}) {
    value.includes(symbolValidEmail.join('')) ? inputEmail.style.borderColor = 'green' : inputEmail.style.borderColor ='red';
} 

function isValidPassword ({target: {value}}) {
    for (const symbol of value)
    value.length >= 5  && symbolValidPassword.includes(symbol) ? inputPassword.style.borderColor = 'green' : inputPassword.style.borderColor ='red';
} 

// Понимаю, что дублируются практически полностью функции - часть с определением цвета рамки, но не смогла правильно прописать функцию на получение цвета, чтоб принимала результат вызова функции проверки правильности пароля или email и выполняла соответственное действие с полем для каждого инпута. Деструктуризация, насколько я поняла,


/* function getBorderColor(func, event) {
    if (func){
      event.target.style.borderColor = 'green'  
    } else{
        event.target.style.borderColor ='red';
    } 
}
  */
