function humanReadable(seconds: number): string {
	let m = Math.floor((seconds % 3600) / 60);
	let h = Math.floor(seconds / 3600);
	let s = seconds % 60;
	return [h, m, s].map((item) => item > 9 ? item : `0${item}`).join(":");
}


const resoultField:any = document.querySelector(".text-resoult");
const testTextField:any = document.querySelector(".text-test");
const resultTitle:any = document.querySelector(".resault-title");
const visibility:boolean = true;

resultTitle.style.visibility = "hidden";

testTextField.innerHTML = `
	humanReadable(0) = ${humanReadable(0)} must be like ->'00:00:00'; <br>
	humanReadable(5) = ${humanReadable(5)} must be like ->'00:00:05'; <br>
	humanReadable(60) = ${humanReadable(60)} must be like ->'00:01:00'; <br>
	humanReadable(86399) = ${humanReadable(86399)} must be like ->'23:59:59'; <br>
	humanReadable(359999) = ${humanReadable(359999)} must be like ->'99:59:59'; <br>
`;

const runScriptBtn:any = document.querySelector("button")?.addEventListener(("click"),()=>{
	const data:number = Number(document.querySelector("input")?.value);
	resultTitle.style.visibility = "visible";
	resoultField.innerHTML = `For ${data} seconds, time in human readbale format(00:00:00) will be: ${humanReadable(data)}`;
});
