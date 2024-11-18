"use strict";
var _a;
function humanReadable(seconds) {
    let m = Math.floor((seconds % 3600) / 60);
    let h = Math.floor(seconds / 3600);
    let s = seconds % 60;
    return [h, m, s].map((item) => item > 9 ? item : `0${item}`).join(":");
}
const resoultField = document.querySelector("span");
const runScriptBtn = (_a = document.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener(("click"), () => {
    var _a;
    const data = Number((_a = document.querySelector("input")) === null || _a === void 0 ? void 0 : _a.value);
    resoultField.innerHTML = `For ${data} seconds, time in human readbale format(00:00:00) will be: ${humanReadable(data)}`;
});
