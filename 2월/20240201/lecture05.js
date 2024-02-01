var height = prompt("키를 입력해주세요");
console.log( height, typeof(height));

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

//Number는 숫자를 나타내는 자료형
//64bit로 실수와 정수 모두 표현이 가능합니다.
//정상적이지 않는 숫자나 표현할 수 없는 범위의 수를 표시하는 NaN, Infinity로 나타내어집니다.

//parseInt, paresFloat
// 문자열 "1"과 1은 다릅니다
// 명령어 뒤에 따라오는 괄호 안에 있는 문자열의 앞에서부터 Number를 인식합니다.
// 183.5 를 입력하면 Number이 나옵니다
// 183.5 입니라 를 입력하면 Number이 나옵니다
// 하지만
// 제 키는 183.5이면 좋겠습니다 를 입력하면 NaN이 됩니다.
// 문자열의 앞에서부터 Number를 인식하기때문에 숫자가 먼저나오면 타입이 Number가 되지만
// 문자열의 앞이 String이면 정상적으로 동작하지 않아 NaN이 표기가 됩니다.