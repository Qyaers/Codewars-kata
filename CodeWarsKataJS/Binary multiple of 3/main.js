// Regular expression that matches binary inputs that are multiple of 3
var multipleOf3Regex = /^(0*(1(01*0)*1)*)*$/;
/*
	^: Begins of str.
	0*: Guarantees one zero or no more zeros. What means in beginning of string can be zero zeroes or more then one zeroes.
	(1(01*0)*1)*: The main part of the regex that checks if a number can be divided by 3.
		1: We check that the sequence must start with one.
		(01*0)*: This group can be more then once:
		0: Compliant zero.
		1*: Guarantees one 1 or no more 1 in this group.
		0: Compliant zero.
		Thus this group, (01*0)* corresponds to a sequence of the form 0, 010, 0110, 01110 etc. 
		1: Compliant 1,and means what this sequence must end 1.
	*: Also, this sequence 1(01*0)*1 can be repeated zero times or one or more than once.
	$: End of string.
*/
const resoultField = document.querySelector(".text-resoult");
const testTextField = document.querySelector(".text-test");
const resultTitle = document.querySelector(".resault-title");
const visibility = true;

resultTitle.style.visibility = "hidden";

testTextField.innerHTML = `
		multipleof3Regex.test('000') = ${multipleOf3Regex.test('000')} - should be true <br>
		multipleof3Regex.test('001') ${multipleOf3Regex.test('001')} - should be false <br>
		multipleof3Regex.test('000') ${multipleOf3Regex.test('011')} -  should be true <br>
		multipleof3Regex.test('000') ${multipleOf3Regex.test('110')}  - should be true <br>
		multipleof3Regex.test('001') ${multipleOf3Regex.test(' abc ')} - should be false <br>
	`;

const runScriptBtn = document.querySelector("button")?.addEventListener(("click"), () => {
	const dataNumber = document.querySelector(".input-number").value;
	resultTitle.style.visibility = "visible";
	resoultField.innerHTML = `For input value resoult is ${multipleOf3Regex.test(dataNumber)}`;
});
