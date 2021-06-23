import getJson from "./getJson.js";
import setDom from "./setDom";
import quizTemplate from "../template/quizTemplate.js";

//퀴즈 DOM 세팅
export default function (){

    const quizJson = getJson("quiz")
    const $quizTable = document.querySelectorAll(".table")[1].children[1]

    setDom(quizJson, $quizTable, quizTemplate)
}