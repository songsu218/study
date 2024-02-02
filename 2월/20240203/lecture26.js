//method,this

function f() {
    console.log(this);
    console.log("f is called");
}

function setName(name) {
    this.name = name;
}

var o={name:"object", method:f, setName:setName};
var o2={name:"", setName:setName};

f();        //f의 함수로써 호출
o.method(); //객체의 바인드된 method로써 호출

o.setName("object1");
o2.setName("object2");

console.log(o, o2);

//Window 객체   //일반적인 함수를 호출할 때, 해당 함수 내부에서 사용된 this는 전역객체에 바인딩 된다.(브라우저에서 실행하고 있으며 브라우저의 경우 Window객체)
//f is called
//Object
//f is called