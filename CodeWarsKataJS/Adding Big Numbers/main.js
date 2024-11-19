function add(a, b) {
	a = [...a].reverse()
	b = [...b].reverse()

	for (let i = 0; i < b.length; i++) {
		a[i] = ~~a[i] + ~~b[i];
		if (a[i] > 9) {
			a[i] -= 10
			b[i + 1] = ~~b[i + 1] + 1
		}
	}

	return a.reverse().join("")
}

const resoultField = document.querySelector(".text-resoult");
const testTextField = document.querySelector(".text-test");
const resultTitle = document.querySelector(".resault-title");
const visibility = true;

resultTitle.style.visibility = "hidden";

testTextField.innerHTML = `
		add("123", "321") = ${add("123", "321")} -> should be "444" <br>
		add("11", "99") = ${add("11", "99")} -> should be "110" <br>
		add("63829983432984289347293874", "90938498237058927340892374089") = ${add("63829983432984289347293874", "90938498237058927340892374089")} -> should be "91002328220491911630239667963" <br>
	`;

const runScriptBtn = document.querySelector("button")?.addEventListener(("click"), () => {
	const dataFirstNumber = document.querySelector(".input-number-first").value;
	const dataSecondNumber = document.querySelector(".input-number-second").value;
	resultTitle.style.visibility = "visible";
	resoultField.innerHTML = `For input value ${dataFirstNumber} and ${dataSecondNumber} resoult is ${add(dataFirstNumber, dataSecondNumber)}`;
});

