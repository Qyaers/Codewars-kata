const removeDuplicateArrays = (arr: [number, number][]): [number, number][] => {
	const map = new Map();
	for (const subArray of arr) {
		const subArrayStr = JSON.stringify(subArray);
		map.set(subArrayStr, subArray);
	}
	return Array.from(map.values());
};

function sumOfIntervals(intervals: [number, number][]) {
	intervals = removeDuplicateArrays(intervals);
	intervals.sort((a, b) => a[0] - b[0]);

	let currentInterval = intervals[0];
	let result = 0;
	for (let index = 1; index <= intervals.length; index++) {
		if (index === intervals.length) {
			result += currentInterval[1] - currentInterval[0];
			break;
		}
		if (intervals[index][0] <= currentInterval[1]) {
			currentInterval[1] = Math.max(intervals[index][1], currentInterval[1]);
		} else {
			result += currentInterval[1] - currentInterval[0];
			currentInterval = intervals[index];
		}
	}
	return result;
}


const resoultField:any = document.querySelector(".text-resoult");
const testTextField:any = document.querySelector(".text-test");
const resultTitle:any = document.querySelector(".resault-title");
const visibility:boolean = true;

resultTitle.style.visibility = "hidden";

testTextField.innerHTML = `
	sumOfIntervals([[1, 2],[6, 10],[11, 15]]) => 9 resoult of script is ${sumOfIntervals([[1, 2],[6, 10],[11, 15]])}; <br>
	sumOfIntervals([[1, 4],[7, 10],[3, 5]]) => 7 resoult of script is ${sumOfIntervals([[1, 4],[7, 10],[3, 5]])}; <br>
	sumOfIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]]) => 19 resoult of script is ${sumOfIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]])}; <br>
	sumOfIntervals([[0, 20],[-100000000, 10],[30, 40]]) => 100000030 resoult of script is ${sumOfIntervals([[0, 20],[-100000000, 10],[30, 40]])}; <br>
`;

const runScriptBtn:any = document.querySelector("button")?.addEventListener(("click"),()=>{
	const data:any = document.querySelector("input")?.value;
	let dataInterval:[number, number][] = JSON.parse(data);
	resultTitle.style.visibility = "visible";
	resoultField.innerHTML = `For the entered intervals  ${data}, their sum will be: ${sumOfIntervals(dataInterval)}`;
});