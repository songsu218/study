//for in 구문
//객체의 각 엘리먼트에 접근할 수 있는 반복문입니다.

var obj = { 
    name: "object",
    weight: 30,
    isObject: true,
    arr: [1,2,3],
    obj: {property:1}
}

console.log(Object.keys(obj)); //["name", "weight", "isObject", "arr", "obj"]

console.log("For 구문으로 object property 반복하기");
var property_list = Object.keys(obj);
console.log("Property List : ", property_list);

for(var i=0; i < property_list.length; i++) {
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("\n\nFor in 구문으로 object property 반복하기");

for(var propertyName in obj) {
    console.log("\t", propertyName, ": ", obj[propertyName]);
}