//while문
//반복문
//조건에 따라 프로그램의 일정 코드를 반복적으로 수행할 수 있도록 하는 구문
//while
//조건이 만족하는 동안 반복실행될 코드를 계속 실행해줍니다.

console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var count = 0;
while( count < 3 ) {
    var choice = parseInt( prompt("메뉴를 선택해 주세요") );

    console.log(choice + "번 메뉴를 선택하셨습니다.");

    switch( choice ) {
        case 1:
            console.log("아이스 아메리카노는 1500원 입니다.");
            break;
        case 2:
            console.log("카페 라떼는 1800원 입니다.");
            break;
        case 3:
            console.log("카푸치노는 2000원 입니다.");
            break;
        case 4:
            console.log("홍차는 1300원 입니다.");
            break;
        default:
            console.log("죄송합니다. 그런 메뉴는 없습니다.");
            break;
    }
    count++;
}

console.log("안녕히 가십시오.");

//반복문을 종료하기 위해서는 break문으로 빠져나갈수 있으며
//continue문의 경우제일 마지막으로 이동하여 다시 반복할지 안할지 확인하고 다시 처음부터 시도합니다.

