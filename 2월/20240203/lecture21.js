var cond = false;

while(cond) {
    console.log("이 구문은 실행되지 않습니다.");
}

do{
    console.log("이 구문은 한번은 실행됩니다.");
}while(cond);

//do~while문은 while과 다르게 반복문을 실행 한 뒤에 반복문의 조건을 보고 실행합니다.

do{
    var ans = praseInt( prompt("1+1=?") );
}while( ans != 2 );

console.log("맞췄습니다.");

//이걸 while로 사용하면

while(true) {
    var ans = praseInt( prompt("1+1=?") );
    if(ans == 2) {
        break;
    }
}