var a = 5, b = 3;
console.log(a+b); //8
console.log(a-b); //2
console.log(a+3); //8
console.log(5+3); //8
console.log(a*b); //15
console.log(a/b); //1.66666666666667
console.log(a%b); //2 //나머지


//위와같은 두개의 피연산자를 가지는 연산자를
// 이항연산자(binary operator)이라고 합니다.
// +, - , * , / , % 나머지 가 있습니다,

console.log(a); //5
console.log(++a); //6
console.log(a); //6

console.log(b); //3
console.log(b++); //3
console.log(b); //4
//하나의 피연산자를 가지는 연산자를
// 단항연산자(unary operator)이라고 합니다.
// -연산자 즉 -a
// 또는 증감연산자(++, --)가 있습니다.

//증감연산자의 경우 증감연산자가 피연산자의 앞에 위치하는지 뒤에위치하는지에 따라 다르게 작동합니다.
// 위와 같이 앞에 위치하면 증감연산자 실행 후에 console.log가 실행이 되고
// 뒤에 위치하면 console.log 이후 증감연산자가 실행되서
// 위와 같이 값이 다르게 나오는 것을 확인할 수 있습니다.

console.log(Math.pow(2,3)); //8 //2의 3승
console.log(Math.sqrt(16)); //4 //16의 제곱근
console.log(Math.random()); //0~1사이의 임의의 숫자(난수)를 발생시켜줍니다.