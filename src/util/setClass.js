import getJson from "./getJson.js"
import setDom from "./setDom.js";
import classTemplate from "../template/classTemplate.js";

//클래스 DOM 세팅
export default async function () {

    const classJson = await getJson("class")
    const $classTable = document.querySelectorAll(".table")[0].children[1]

    setDom(classJson, $classTable, classTemplate)
}