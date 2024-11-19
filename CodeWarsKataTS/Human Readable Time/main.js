"use strict";
var _a;
function humanReadable(seconds) {
    let m = Math.floor((seconds % 3600) / 60);
    let h = Math.floor(seconds / 3600);
    let s = seconds % 60;
    return [h, m, s].map((item) => item > 9 ? item : `0${item}`).join(":");
}
const resoultField = document.querySelector(".text-resoult");
const testTextField = document.querySelector(".text-test");
const resultTitle = document.querySelector(".resault-title");
const visibility = true;
resultTitle.style.visibility = "hidden";
testTextField.innerHTML = `
	humanReadable(0) = ${humanReadable(0)} must be like ->'00:00:00'; <br>
	humanReadable(5) = ${humanReadable(5)} must be like ->'00:00:05'; <br>
	humanReadable(60) = ${humanReadable(60)} must be like ->'00:01:00'; <br>
	humanReadable(86399) = ${humanReadable(86399)} must be like ->'23:59:59'; <br>
	humanReadable(359999) = ${humanReadable(359999)} must be like ->'99:59:59'; <br>
`;
const runScriptBtn = (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener(("click"), () => {
    var _a;
    const data = Number((_a = document.querySelector("input")) === null || _a === void 0 ? void 0 : _a.value);
    resultTitle.style.visibility = "visible";
    resoultField.innerHTML = `For ${data} seconds, time in human readbale format(00:00:00) will be: ${humanReadable(data)}`;
});
