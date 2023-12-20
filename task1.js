const dollarRate = 40;
let result = 'Розрахунок за даним курсом : \n'
let dollars;
for (dollars = 10; dollars <=100; dollars += 10) {
    const uah = dollars * dollarRate;
    result += `${dollars} долларів становлять ${uah} гривень. \n`;
}
alert (result);