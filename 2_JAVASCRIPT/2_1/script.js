"use strict"

/* 
한 파일에 정리하다보니 복잡하다고 생각할 수 있습니다.

각 요소별 자세한 설명은 https://hyunsdev.notion.site/Day2-Javascript-86450daea43b48e5be84cf1916f3ec0a 를 참고해주세요
*/


// 콘솔 출력
console.log("")

// 자바스크립트의 변수 선언 (let, const)
let a = ''
const b = ''


// 자바스크립트의 자료형 (string, number, boolean, undefined, null, object, array)
let typeString = ""
let typeNumber = 0
let typeBoolean = true
let typeUndefined = undefined
let typeNull = null
let typeObject = {}
let typeArray = []


// 객체(Object 사용하기)
let testObject = {a: 1, b: '2'}

// 객체의 프로퍼티에 접근하려면 다음과 같이 사용합니다.
// 아래 두 방법은 "동일한" 방법입니다.
console.log(testObject.a)
console.log(testObject["b"])

testObject.c = true // 새로운 프로퍼티 생성


// 배열(Array) 사용하기
let testArray = ["b", "c"]

console.log(testArray[0]) // 배열은 0부터 시작합니다.
testArray.push("d") // 배열 뒤쪽에 추가하기
testArray.unshift('a') // 배열 앞쪽에 추가하기

testArray = [...testArray, 'd'] // 배열 뒤쪽에 추가하기 
testArray = ["a", ...testArray] // 배열 앞쪽에 추가하기


// 자바스크립트의 if문
if (a == true) {
    // 코드
}

// 자바스크립트의 for문
for (let i; i < 10; i++) {
    // 코드
}

// 자바스크립트의 for ... of 문 (array에 사용)
for (let i of []) {
    // 코드
}

// 자바스크립트의 for ... in 문 (object에 사용)
for (let i in {}) {
    // 코드
}

// 자바스크립트의 while문
while (i < 10) {
    // 코드
}

// 함수 정의하기 (function, 화살표 함수)
// 두 함수는 사소한 차이점이 있으나 우리 수준에서는 동일하다고 간주
function func(arg) {

}

// 기본적으로는 아래처럼 화살표 함수를 권장합니다.
const func = (arg) => {}