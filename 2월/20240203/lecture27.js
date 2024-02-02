//closure(클로저)
//함수, 함수가 선언될 때의 environment로 구성
//함수가 정의될 때의 environment가 함께 closure로 결합되면서, 다양한 활용이 가능합니다.

function makeCounterFunction(initVal) {
    var count = initVal;
    function Increase() {
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();

counter2();