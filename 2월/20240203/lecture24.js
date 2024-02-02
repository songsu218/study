//변수의 scope
//선언한 변수가 유효한 영역

//function scope
//선언된 변수는  선언된 함수 안에서 접근 가능
//선언된 함수 안에서 선언된 함수 (nested function)에서도 접근 가능

function a() {
    var v_a="a"; //a의 지역변수
    
    function b() {
        var v_b ="b"; //b의 지역변수
        console.log("o :", typeof(v), typeof(v_a), typeof(v_b)); //string string string
    }
    b();
    console.log("o :", typeof(v), typeof(v_a), typeof(v_b)); // string string undefined
}

var v="v"; //전역변수

a();

console.log("o :", typeof(v), typeof(v_a), typeof(v_b)); //string undefined undefined
