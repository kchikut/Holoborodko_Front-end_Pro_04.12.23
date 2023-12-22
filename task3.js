const userInput = prompt('Введіть будь ласка число:');
if (userInput && userInput.trim() && !isNaN(+userInput)) {
    const number = +userInput;
    let isPowerOfThree = false;
    if (Number.isInteger(number)) {
        let power = 0;
        let result = 1;
        while (result<number) {
            result *=3;
            power++;
        }
        isPowerOfThree = result === number;
    }
    alert(isPowerOfThree? `${userInput} можна отримати шляхом зведення числа 3 у стенінь`: `${userInput} не можна отримати шляхом зведення числа 3 у степінь`)
}
else {
    alert('Число введено некоректно. Оновіть сторінку та спробуйте ще.')
}