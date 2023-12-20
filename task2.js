const userInput = prompt('Введіть будь ласка число:')
if (userInput && userInput.trim() && !isNaN(+userInput) && userInput > 1) {
    const number = +userInput;
    let isPrimeNumber = true;
    for (let i=2; i<number; i++){
        if (number%i===0) {
            isPrimeNumber = false;
        }
    }
    alert (isPrimeNumber? 'Число просте': `Число не є простим`)
}
else {
    alert('Число введено некоректно. Оновіть сторінку та спробуйте ще.')
}
