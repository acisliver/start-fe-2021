import allFilter from "./allFilter.js";
import helpLinkFilter from "./helpLinkFilter.js";
import gitFilter from "./gitFilter.js";
import recentFilter from "./recentFilter.js";

export default function (){
    const filterName = event.target.innerHTML

    //tr들을 가져옴
    const trs = document.querySelectorAll(".table")[0].children[1].children

    //테이블 초기화
    allFilter(trs)

    switch (filterName) {
        case "도움링크":
            helpLinkFilter(trs)
            break
        case "git":
            gitFilter(trs)
            break
        case "최신순":
            recentFilter(trs)
            break
        case "모두":
            allFilter(trs)
            break
    }
}