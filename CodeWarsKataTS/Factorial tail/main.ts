const primeFactors = (n: number): Map<number, number> => {
	const factors = new Map();
	for (let divisor = 2; n >= 2; divisor++) {
		while (n % divisor === 0) {
		factors.set(divisor, (factors.get(divisor) || 0) + 1);
		n /= divisor;
		}
	}
	return factors;
};

const countFactorInFactorial = (n: number, factor: number): number => {
	let count = 0;
	for (let power = factor; n >= power; power *= factor) {
		count += Math.floor(n / power);
	}
	return count;
};

const zeroes = (base: number, num: number) => {
	const baseFactors = primeFactors(base);
	return Math.min(...Array.from(baseFactors).map(([factor, exponent]) =>
		Math.floor(countFactorInFactorial(num, factor) / exponent)));
};


const resoultField:any = document.querySelector(".text-resoult");
const testTextField:any = document.querySelector(".text-test");
const resultTitle:any = document.querySelector(".resault-title");
const visibility:boolean = true;

resultTitle.style.visibility = "hidden";

testTextField.innerHTML = `
	zeroes(base = 10,num = 10) = ${zeroes(10,10)} should return 2 when input is zeroes(10,10)"; <br>
	zeroes(base = 16,num = 16) = ${zeroes(16,16)} should return 3 when input is zeroes(16,16); <br>
`;

const runScriptBtn:any = document.querySelector("button")?.addEventListener(("click"),()=>{
	const dataBase:number = Number((document.querySelector(".input-base") as HTMLInputElement)?.value);
	const dataNum:number = Number((document.querySelector(".input-num") as HTMLInputElement)?.value);
	resultTitle.style.visibility = "visible";
	resoultField.innerHTML = `For input vaules base = ${dataBase} and num = ${dataNum} result is: ${zeroes(dataBase,dataNum)}`;
});
