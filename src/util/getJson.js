import quizJson from "../json/quiz.json"
import classJson from "../json/class.json"

export default function (content) {
    return content === "quiz" ? quizJson : classJson
}