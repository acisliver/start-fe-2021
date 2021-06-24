/**
 * 최신순으로 정렬
 *
 * @param {HTMLCollection} trs 테이블
 */

export default function (trs){

    //Array의 reverse를 사용하기 위해 형변환
    let array = [...trs]
    array.reverse()
    console.log(array)

    let dom = ''

    array.forEach(tr => dom += `<tr>${tr.innerHTML}</tr>`)

    console.log(dom)

    //직접 Dom을 갱신
    document.querySelectorAll(".table")[0].children[1].innerHTML = dom
}