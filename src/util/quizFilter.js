import allFilter from "./allFilter.js";
import helpLinkFilter from "./helpLinkFilter.js";
import gitFilter from "./gitFilter.js";

export default function (){
    const filterName = event.target.innerHTML

    //tr들을 가져옴
    const trs = document.querySelectorAll(".table")[1].children[1].children

    //테이블 초기화
    allFilter(trs)

    switch (filterName) {
        case "git":
            gitFilter(trs)
            break
        case "모두":
            allFilter(trs)
            break
    }
}