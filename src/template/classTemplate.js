/**
 * 수업 템플릿
 *
 * @param row json 요소
 * @param week 주차
 * @returns {string} 완성된 DOM 요소
 */
export default function (row, week){

    let link = ''
    let num = 1

    row.links.forEach(el => {
        link += linkTemplate(el, num)
        num += 1
    })

    return `<tr>
            <th scope="row">${week}</th>
            <td>${row.title}</td>
            <td>
              <a href="${row.docUrl}" class="badge bg-secondary"
                >문서</a>
            </td>
            <td>${link}</td>
            <td>${row.date}</td>
            <td>
              <a href="${row.gitUrl}">git</a>
            </td>
          </tr>`

    function linkTemplate(url, num) {
        return `<a
                href="${url}"
                class="badge bg-secondary"
                >${num}</a>`
    }
}