/**
 * git 클릭 시 git이 없는 열 제거
 *
 * @param {HTMLCollection} trs 테이블
 */
export default function (trs){
    for (let tr of trs){
        let git = tr.children[tr.children.length-1].children[0]
        console.log(git.href)
        //json에 데이터가 없으면 현재 위치를 href에 넣기에
        //location.href를 통해 현재 url을 찾았습니다
        if (git.href === location.href)
            tr.style.display = "none"
    }
}