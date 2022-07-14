// const clock = document.querySelector("h2#clock");
// function sayHello(){
//     console.log("hello");
// }

//setInterval(내가 실행하고자 하는 function, 호출되는 function 간격을 몇 ms로 할지)
//setInterval(sayHello, 5000)//5초에 한번
//setTimeout(호출하려는 function, 얼마나 기다릴지 ms단위로)
//setTimeout(sayHello, 5000)

const clock = document.querySelector("h2#clock");
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock,1000);
//padStart() : string에 쓸 수 있는 function
//padStart(원하는 문자열의 길이, "만약 문자열이 앞의 조건에 충족하지 못한다면 채워넣을 문자")
//반대로 문자의 뒤에 넣고 싶다면 padEnd()를 사용하면 된다.