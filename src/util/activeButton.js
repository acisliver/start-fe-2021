export default function (){
    //btn-group 가져오기
    const $btnGroups = document.querySelectorAll(".btn-group")

    //btn-group 분류하기
    const $eduBtnGroup = $btnGroups[0].children
    const $quizBtnGroup = $btnGroups[1].children

    //HTML Collection은 forEach문을 지원하지 않기 때문에
    //for of 문을 사용하여 각 버튼 가져오기
    //그 후 activeButton 이벤트 추가
    for(let btn of $eduBtnGroup){
        btn.addEventListener("click", () => activeButton($eduBtnGroup, event))
    }

    for(let btn of $quizBtnGroup){
        btn.addEventListener("click", () => activeButton($quizBtnGroup, event))
    }

    /**
     * button active 동작 함수
     *
     * @param {HTMLCollection} group
     * @param event
     */
    function activeButton(group, event) {
        removeActive(group)
        event.target.classList.add("active")
    }

    /**
     * 현재 활성화 되어있는 active 제거
     *
     * @param {HTMLCollection} group
     */
    function removeActive(group) {
        for(let btn of group){
            let classList = btn.classList;
            if(classList.contains("active")){
                classList.remove("active")
            }
        }
    }
}