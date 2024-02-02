//조건문
//조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 합니다.

if(true) {
    console.log("이 구문은 실행 됩니다.");
}

if(false) {
    console.log("이 구문은 실행되지 않습니다.");
}

//if 조건문은 true 즉, 조건이 참일 때만 실행됩니다.
//else 는 if이 실행되지 않았을 때 실행됩니다.

if(true) 
{
    console.log("1");
}
else
{
    console.log("2");
}
//위의 경우 if가 true여서 무조건 실행되므로 else가 실행되지 않습니다.

if(true) {
    console.log("1");
}
else if(true) {
    console.log("2");
}
else if(true) {
    console.log("3");
}
else {
    console.log("4");
}
//else if문은 몇번이든 작성할수 있지만 위의 코드의 경우 if가 true이므로 무조건 실행하므로 1이 출력됩니다.
//else if는 그 위의 조건문의 조건이 false이고 자신이 true일때 실행됩니다.