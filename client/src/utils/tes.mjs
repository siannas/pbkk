
import { ArrayOfJsonToArray } from "./JsonUtil.mjs";

var data = [
    {"id":"1", "nama":"Ask"},
    {"id":"2", "nama":"aasda"}
];
const tes = ArrayOfJsonToArray(data);

console.log(tes);