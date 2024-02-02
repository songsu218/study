var str = "abcdeabcde";

console.log(str.charAt(0)); //"a"
console.log(str.length); //10;
console.log(str.charAt(9)); //"e";
console.log(str.charAt(10)); //"";
console.log(str.charAt(-1)); //"";

console.log(str[1]); //b
console.log(str[-1]); //undefined
//특정 문자열 위치 찾기
//.charAt을 사용하거나 []대괄호를 사용하면된다.
// 범위를 넘어가면 빈 문자열을 출력합니다.
// 대괄호를 사용하는 경우 undefined를 출력합니다.


console.log(str.substring(2,4)); //"cd"
console.log(str.substr(2,4)); //"cdea"

console.log(str.substring(2)); "cdeabcde"
console.log(str.substr(2)); "cdeabcde"
//부분문자열구하기
//.substring(2,4) 은 2~4까지 2글자
//.substr(2,4) 은 2번째부터 4글자
//의 차이가 있습니다.
// 두함수 모두 뒤의 매개변수가 빠지면 1번째 매개변수의 숫자부터 전부 출력해줍니다.
// 매개변수가 -라면 뒤에서부터 출력해줍니다.

console.log(str.substr(-7)); //deabcde
console.log(str.substr(-7,2)); //"de"

//문자열검색하기
console.log(str.indexOf("bc")); //1
console.log(str.lastindexOf("bc")); //6
console.log(str.lastIndexOf("f")); //-1

//.indexOf는 앞에서부터 문자열의 위치
//.lastindexOf 뒤에서부터 문자열의 위치
// 존재하지 않는 문자열은 -1로 출력됩니다.
