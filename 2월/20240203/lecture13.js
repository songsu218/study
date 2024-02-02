var str = "Hello";
console.log(str.length); //5
console.log(str["length"]); //5

//객체 접근하는 방법이 객체이름.속성명, 객체이름["속성명"] 이므로 length에 접근하는데 2가지의 방법으로 접근할 수 있습니다.

var str2 = " World";

console.log(str.concat(str2)); //"Hello World"
var str3 = str.concat(str2);
console.log(str3);//"Hello World"
//또는 str1+ str2;
//문자열 붙이기함수

console.log(str.concat(str2).concat("!")); //"Hello World!"
console.log("Hello".concat(" World").concat("!")); //"Hello World";
console.log("hello".length); //5

