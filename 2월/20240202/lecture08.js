var uninitialized_var;
console.log(uninitialized_var); //undefined
console.log(typeof(uninitialized_var)); //"undefined"

var obj = { x:1, y:2 };

console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //undefined
console.log(typeof(obj.z)); //"undefined"
//undefined
//변수나 속성이 정의되지 않는 경우를 표현하기 위해 사용합니다.
//선언하고 초기화되지 않은 변수의 타입이나 값을 표현합니다.
//객체의 정의되지 않은 속성의 타입이나 값을 표현합니다.

var null_var;
null_var = null;

console.log(null_var); //null
console.log(typeof(null_var)); //"object"

//null
//아무것도 없는 비어있는 상태를 나타낼때 사용합니다.
//typeof의 결과는 object가 나오며 값은 null이 나옵니다.