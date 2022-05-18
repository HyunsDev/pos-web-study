// fetch() 를 이용하여 API 가져오기


// fetch()는 Promise라는 것을 반환합니다.
// 이 Promise를 반환하는 경우 await를 사용해야 합니다.
// 자세한 내용은 "자바스크립트의 async await"라고 검색해보세요
const request = async () => {
    const res = await fetch('https://api.hyuns.dev/var/global/pos/pos')
    const json = await res.json()
    document.querySelector("#result").innerHTML = json.value
}

request()