// 나이스 API의 통해 오늘의 급식 가져오기

let date = new Date()
let dateString = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`

console.log(dateString)

async function request() {
    let response = await fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE=N10&SD_SCHUL_CODE=8140089&MLSV_YMD=${dateString}`)
    let data = await response.json()
    
    for ( let meal of data.mealServiceDietInfo[1].row ) {
        let element = document.createElement('p')
        element.append(`${meal.MLSV_YMD} ${meal.MMEAL_SC_NM}: ${meal.DDISH_NM.replaceAll('<br/>', ', ')}`)
        document.querySelector('#meal').append(element)
    }
}
request()