//함수 : 호출에 의해 여러번 실행할 수 있는 코드 블럭입니다.
// 반복되는 코드를 감소시킬수 있습니다.
// 코드의 개발 및 수정이 용이해집니다
// console.log() 도 마찬가지로 문자열을 입력받아서 해당문자열을 개발자도구에 출력해주는 함수.
// 함수를 정의하는 방법
//function 함수이름(인자1, 인자2) {
// 실행할코드
// return 결과값;
// }

function return_test() {
    return;
    console.log("실행되지 않는 코드");
}
// return 구문을 만나면 실행을 멈추고 결과값을 반환합니다.
// 즉 return 뒤의 함수는 실행되지 않는 코드입니다.

function print(message) {
    console.log("print function in");
    console.log(message);
    console.log("print function out");
}

function sum( arg1, arg2 ) {
    var result = arg1 + arg2;
    return result;
}

console.log(return_test()); //undefined
console.log(print("Hello Function"));
//print function in
//Hello Function
//print function out
//undefined

console.log(sum(1,2));
//3