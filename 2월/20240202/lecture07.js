var empty_obj = {};

console.log(typeof(empty_obj));

var man = {name:"홍길동", age:20, height:180 };

console.log(man.name);
console.log(man["name"]);

man.name="이몽룡";
man["age"]=15;
console.log(man);

//객체는 중괄호 {}를 사용해 정의 가능합니다.
//객체의 타입은 Object로 나타냅니다.
//객체란 속성(Property)의 집합으로 이루어져 있습니다.
//속성은 name:value의 형태로 정의가능합니다.

//객체에 접근하는 방법은 객체이름.속성이름 man.name
// 객체이름["속성이름"] man["name"] 과 같은 방법으로 접근할 수 있습니다.
