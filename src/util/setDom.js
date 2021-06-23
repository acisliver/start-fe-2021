/**
 * json을 가져와 template에 맞게 tabel에 dom요소 적용
 *
 * @param {Array}json 사용할 json
 * @param {Element}table 적용할 테이블
 * @param {function}template 사용할 템플릿
 */
export default function (json, table, template){

    let dom = ''
    //classTemplate은 week가 json에 설정되어있지 않아서 따로 세팅
    let week = 1
    json.forEach(el => {
        dom += template(el, week)
        week += 1
    })
    table.innerHTML = dom

}