var a=1, b=2,c=3,d=4;
var e="a", f="b", g="c", h="d";

console.log(a<b); //true
console.log(a>b); //false
console.log(a<=b); //true
console.log(a>=b); //false
console.log(a==a); //true
console.log(a==b); //false
console.log(a!=b); //true
console.log(a!=a); //false
console.log(e<f); //true
console.log(f<e); //false
console.log("a"<"b") //true

//관계연산자(Relational operator)
//피연산자 두 개의 관계를 비교하는 이항연산자 관계에따라 boolean 타입의 true, false로 표현됩니다.
//문자의 경우 사전순을 비교합니다.

//논리연산자(Logical operator)
console.log(true&&true); //true
console.log(false &&true); // false
console.log(false && false); //false

console.log(true||true); //true
console.log(true||false); //true
console.log(false||false); //false
console.log(!true); //false
console.log(!false); //true

var height = 180;
var age = 20;

console.log(height >= 180 && age >=20 && age < 30); //true
height = 170;
console.log(height >= 180 && age >=20 && age < 30); // false

console.log(age < 8 || age >= 65); //false
age = 70;
console.log(age < 8 || age >= 65); //true