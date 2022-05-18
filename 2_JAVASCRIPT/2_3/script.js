// DOM 접근해서, 버튼 클릭했을 때 텍스트 표시하기

// 버튼 태그 가져오기
const $button = document.querySelector("#button")

// 버튼에 이벤트 추가하기
$button.addEventListener("click", () => {

    // 이벤트가 일어났을 때 텍스트 추가
    document.querySelector("#result").innerHTML = '버튼을 누르셨군요!'
})