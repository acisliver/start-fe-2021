import displaySpinner from "./displaySpinner.js";
import noneDisplaySpinner from "./noneDisplaySpinner.js";

/**
 * firebase로 배포된 json을 가져온다
 *
 * @param {String} content 불러올 데이터 이름
 * @returns {Promise<any>} 데이터
 */
export default  async function (content) {
    //json 로딩 시작 시 스피너 display
    displaySpinner();

    let url = ''

    switch (content) {
        case "class":
            url = "https://firebasestorage.googleapis.com/v0/b/start-fe.appspot.com/o/class.json?alt=media&token=75d2c5fa-2cdd-43a6-93d0-0da71cd42592"
            break
        case "quiz":
            url = "https://firebasestorage.googleapis.com/v0/b/start-fe.appspot.com/o/quiz.json?alt=media&token=b63015b1-ce62-4be7-9b01-b25ce4ee7232"
            break
        default:
            break
    }

    const res = await fetch(url)
    const data = await res.json()

    //로딩이 끝나면 spinner 제거
    noneDisplaySpinner();

    return data
}
