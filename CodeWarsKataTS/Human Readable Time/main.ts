function humanReadable(seconds: number): string {
	let m = Math.floor((seconds % 3600) / 60);
	let h = Math.floor(seconds / 3600);
	let s = seconds % 60;
	return [h, m, s].map((item) => item > 9 ? item : `0${item}`).join(":");
}

const resoultField:any = document.querySelector("span");
const runScriptBtn:any = document.querySelector("button")?.addEventListener(("click"),()=>{
	const data:number = Number(document.querySelector("input")?.value);
	resoultField.innerHTML = `For ${data} seconds, time in human readbale format(00:00:00) will be: ${humanReadable(data)}`;
});
