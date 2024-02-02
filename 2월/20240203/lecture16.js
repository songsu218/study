//배열사용하기
//배열에 엘리먼트 추가/삭제하기
var arr = [1,2,3,4,5];
arr.pop(); //5
console.log(arr); //[1,2,3,4]
arr.shift(); //1
console.log(arr); [2,3,4];

//pop는 뒤에서부터
//shift는 앞에서부터
// 삭제하고 리턴합니다.

arr.push(6);
console.log(arr); //[2,3,4,6];
arr.unshift(0); //5
console.log(arr); //[0,2,3,4,6];

//push, unshift는 pop와 shift와 반대로 추가해줍니다.

arr.reverse();
console.log(); //[6,4,3,2,0];
//reverse()명령어는 배열을 뒤집어줍니다.
arr.sort();
//sort() 명령어는 배열을 정렬해줍니다.
console.log(arr); //[0,2,3,4,6]

//배열도 문자열과 마찬가지로 붙이기 검색하기가 가능합니다.
var arr1 =[1,2,3];
var arr2 = [4,5,6];
console.log(arr1.concat(arr2)); //[1,2,3,4,5,6]

arr3 = arr1.concat(arr2);
console.log(arr3); //[1,2,3,4,5,6]

var arr4 = [1,2,3,1,2,3];
console.log(arr4.indexOf(2)); //1
console.log(arr4.lastIndexOf(2)); //4

//문자열 split 함수
// 문자열을 구분자로 나눠서 각각을 담은 배열을 반환하는 함수
var str = "1,2,3,4,5";
str.split(","); //["1", "2", "3", "4", "5"];
//정규식을사용하여 문자열을 나눌수도 있습니다.
