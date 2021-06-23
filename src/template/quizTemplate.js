/**
 * 퀴즈 템플릿
 *
 * @param row json 요소
 * @returns {string} 완성된 DOM
 */
export default function (row) {
    return `<tr>
        <td>${row.title}</td>
        <td>
          <a
            class="badge bg-secondary"
            href="${row.docUrl}"
            >문서</a
          >
        </td>
        <td><a href="${row.previewUrl}">보기</a></td>
        <td><a href="${row.gitUrl}">git</a></td>
      </tr>`
}