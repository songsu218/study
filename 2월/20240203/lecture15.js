//배열
//값을 저장할 수 있는 엘리먼트(변수)의 연속된 공간. 주소(인덱스, index)를 이용해 각 엘리먼트에 접근 가능합니다.

var arr=[];
//로 빈배열을 만들수 있습니다.
var arr2=[1,2,3,4,5];
//로 초기화된 배열을 만들수 있습니다.
//자바스크립트는 다른 언어와 다르게 숫자형배열 문자형배열 이런식이 아니기 때문에
// 객체와 마찬가지로 형이 달라도 하나의 배열에 들어갈 수있습니다.
var mixed_arr = [1, true, 3.14, "string", {name:"object"}, [1,2,3]];
console.log(mixed_arr);
//1, true, 3.14, "string", Object, Array[3]
console.log(mixed_arr.length);
//6
console.log(arr2.length); //5
console.log(arr.length); //0
console.log(arr2[0]); //1
console.log(arr2[3]); //4
console.log(arr2[7]); //undefined