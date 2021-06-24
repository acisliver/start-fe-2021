/**
 * 도움링크 클릭 시 링크가 없다면 없는 열 제거
 *
 * @param {HTMLCollection} trs 테이블
 */
export default function (trs){
    for (let tr of trs){
        let links = tr.children[3]

        if (links.innerHTML === "")
            tr.style.display = "none"
    }
}
