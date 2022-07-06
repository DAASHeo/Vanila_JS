// function : 계속 반복해서 사용할 수 있는 코드 조각
console.log("Hello my name is")

// function sayHello(){
//     var name = prompt("당신의 이름을 입력하세요:");
//     alert("Hello "+name);
// }


// function sayHello(name){
//     alert("Hello my name is "+ name);
// }
// sayHello("nico");

//argument(인수) : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법

const player = {
    //특성 작성
    name : 'nico',
    points : 10,
    fat : true,
    sayHello : function(other){
        console.log("hello!" + other);
    },
};

console.log(player.name);
player.sayHello("lynn"); 

const calculator = {
    add:function (a, b){
    console.log(a+b);
    },
    minus:function(a, b){
    console.log (a, b);
    },
    divide:function (a, b){
    console.log (a/b);
    },
    power:function(a, b){
    console.log (a**b);
    },
    };
    
    calculator.add(1, 1);
    calculator.minus(1 ,1);
    calculator.divide(1, 1);
    calculator.power(1,1);

//console.log는 console에 무언가를 기록하여 보여준다. 
//console에서 값을 가져올 수는 없다. 

//parseInt : string을 int로 변환하는 함수
//만약 숫자가 아닌 문자를 입력하면 NaN(Not a Number)이 출력된다.

//isNaN() : boolean(true or false)으로 알려주는 함수  
//하나의 인자값을 주면 number인지 아닌지를 알려준다.
//숫자이면 false, 문자이면 true