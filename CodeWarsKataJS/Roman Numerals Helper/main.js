class RomanNumerals {
	static roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

	static toRoman(num) {
		if (num == 0) return 0;
		let romanNum = "";
		for (let i in this.roman) {
			while (num >= this.roman[i]) {
				romanNum += i;
				num -= this.roman[i];
			}
		}
		return romanNum;
	}
	static fromRoman(str) {
		if (str == "") return "nulla";
		return str.match(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/g).reduce((acc, item) => acc + this.roman[item], 0);
	}
}

const resoultField = document.querySelector("span");
const runScriptBtn = document.querySelector("button")?.addEventListener(("click"), () => {
	const dataNumber = Number(document.querySelector(".input-number")?.value);
	const dataRomanNumber = document.querySelector(".input-roman-number")?.value;
	resoultField.innerHTML = `
		Roman numbers convert ${RomanNumerals.toRoman(dataNumber)} <br>
		Roman to number convert: ${RomanNumerals.fromRoman(dataRomanNumber)}
	`;
});
