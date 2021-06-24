/**
 * 모든 열을 보여주는 필터
 *
 * @param {HTMLCollection}trs
 */
export default function (trs){
    for (let tr of trs){
        tr.style.display = ""
    }
}