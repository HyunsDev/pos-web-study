let tag = document.querySelector('#name')
tag.addEventListener('click', event => {
    tag.innerHTML = '클릭함'
})


// const now = new Date()
// const dateString = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2, 0)}${now.getDate()}`
// console.log(dateString)
// // 20220512

let now = new Date()
let year = now.getFullYear()
let monthValue = now.getMonth() + 1
let month
if (monthValue <= 10) {
    month = "0" + monthValue
} else {
    month = monthValue
}
let day = now.getDate()
let dateString = year + month + day
console.log(dateString)
