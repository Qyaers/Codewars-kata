"use strict";
var _a;
const primeFactors = (n) => {
    const factors = new Map();
    for (let divisor = 2; n >= 2; divisor++) {
        while (n % divisor === 0) {
            factors.set(divisor, (factors.get(divisor) || 0) + 1);
            n /= divisor;
        }
    }
    return factors;
};
const countFactorInFactorial = (n, factor) => {
    let count = 0;
    for (let power = factor; n >= power; power *= factor) {
        count += Math.floor(n / power);
    }
    return count;
};
const zeroes = (base, num) => {
    const baseFactors = primeFactors(base);
    return Math.min(...Array.from(baseFactors).map(([factor, exponent]) => Math.floor(countFactorInFactorial(num, factor) / exponent)));
};
const resoultField = document.querySelector(".text-resoult");
const testTextField = document.querySelector(".text-test");
const resultTitle = document.querySelector(".resault-title");
const visibility = true;
resultTitle.style.visibility = "hidden";
testTextField.innerHTML = `
	zeroes(base = 10,num = 10) = ${zeroes(10, 10)} should return 2 when input is zeroes(10,10)"; <br>
	zeroes(base = 16,num = 16) = ${zeroes(16, 16)} should return 3 when input is zeroes(16,16); <br>
`;
const runScriptBtn = (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener(("click"), () => {
    var _a, _b;
    const dataBase = Number((_a = document.querySelector(".input-base")) === null || _a === void 0 ? void 0 : _a.value);
    const dataNum = Number((_b = document.querySelector(".input-num")) === null || _b === void 0 ? void 0 : _b.value);
    resultTitle.style.visibility = "visible";
    resoultField.innerHTML = `For input vaules base = ${dataBase} and num = ${dataNum} result is: ${zeroes(dataBase, dataNum)}`;
});
