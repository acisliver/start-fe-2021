import displaySpinner from "./displaySpinner.js";
import noneDisplaySpinner from "./noneDisplaySpinner.js";

/**
 * firebase로 배포된 json을 가져온다
 *
 * @param {String} content 불러올 데이터 이름
 * @returns {Promise<any>} 데이터
 */
export default  async function (content) {
    displaySpinner();

    let url = ''

    switch (content) {
        case "class":
            url = "https://firebasestorage.googleapis.com/v0/b/start-fe.appspot.com/o/class.json?alt=media&token=75d2c5fa-2cdd-43a6-93d0-0da71cd42592"
            break
        case "quiz":
            url = "https://firebasestorage.googleapis.com/v0/b/start-fe.appspot.com/o/quiz.json?alt=media&token=35339125-4da1-4ac7-ac21-23f1f0c3038b"
            break
        default:
            break
    }

    const res = await fetch(url)
    const data = await res.json()

    noneDisplaySpinner();

    return data
}