var a=7+3*2;
console.log(a); //13
a = (7+3)*2;
console.log(a); //20

//연산자 우선순위
//수학에서 곱하기를 더하기보다 먼저 계산하는 것처럼, javascript에서도 연산자에 우선순위가 존재합니다.
// Logical Operator : NOT (!)
// Arithmetic Operator : *. /, %, +, -
// Relational Operator: >, <, <=, >=, ==, !=
// Logical Operator : AND (&&)
// Logical Operator : OR (||)
// 위의 순서순으로 먼저 연산됩니다.

//괄호
//우선순위를 명시하기 위해 괄호를 사용하기도 합니다.
//괄호 안의 계산식이 먼저 계산되며 코드의 가독성이 향상되고 연ㅅ나자 우선순위 실수를 방지하기도합니다.
//코드를 짤때 어떤식으로 돌아가는지 알아둘 필요는 있습니다.
// 괄호를 사용하는게 다른사람이 보기에도 가독성이 좋습니다.