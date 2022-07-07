//console창에 document를 입력하면 html코드를 확인할 수 있음 -> document는 이미 브라우저에 존재하는 object임
//console.dir : 객체의 데이터를 확인할 수 있다.
//JavaScript에서 HTML을 읽어올 뿐만 아니라, HTML을 변경할 수도 있다.
const title = document.getElementById("title"); //html속 ID로 데이터 불러오기
console.log(title);
console.dir(title);
//JS는 HTML의 element를 가지고 오지만, HTML 자체를 보여주지는 않는다.

title.innerText = "Got you!";

//자주 발생하는 에러1 : Uncaught TypeError : Cannot set property '~~' of ~~.js null -> 잘못된 아이디 또는 클래스 호출일 확률이 높음
//getElementById 또는 getElementsByClassName에 있는 아이디 또는 클래스명이 오타가 있는지 확인해보자

const hellos =  document.getElementsByClassName("hello");
console.log(hellos);
//getElementsByClassName은 배열로 표현되기때문에 그 안의 데이터를 사용하지 못함 ex)hellos.innerText가 안됨
//그러므로 클래스를 사용해서 데이터를 수정할때는 querySelector를 이용해서 element를 css방식으로 검색해야한다.
const hello = document.querySelector(".hello");
console.log(hello);
//querySelector을 이용할 때 html 요소에 같은 클래스를 같이 element들이 여러개라면 첫번째의 element만 호출된다.
//만약 그 클래스명을 가진 element를 모두 불러오고 싶다면 querySelectorAll을 이용한다.
//querySelector은 클래스에 해당하는 element들을 배열로 가져올 것이다.
//title.style.color="white"; -> html속 ID로 데이터 불러오기, style 데이터에서 color 데이터 변경
function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color="white";
}
title.addEventListener("click",handleTitleClick) 

//대상.addEventListener(어떤 이벤트가 감지되었을떼, 어떤 함수를 실행할 것인지 )
//Tip! 함수에서 ()는 실행버튼이라고 생각하면 좋음. function()->이 함수를 실행하겠다.

//event종류 파악하는 법
//1. https://developer.mozilla.org/ko/docs/Web/Events 참조
//2. console.dir(이벤트 적용하고 싶은 대상)으로 나타나는 데이터중에서 on이 앞에 부쳐져있는것은 event임
//이벤트 이름이 onabort라면 사용할때는 abort라고 입력해야함

//title.onclick = handleTitleClick; 은 title.addEventListener("click",handleTitleClick) 과 같은 의미
//왜 addEventListener를 사용할까? -> removeEventListener을 통해서 event listener을 제거할 수 있기 때문이다.

//4일차 과제에서 내가 부족했던 점
//문제에 "모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다."라고 적혀있어서 좀 당황스러웠다.
//일단 superEventHandler내부에 function 함수명(){ }이렇게 작성햇는데 오류 떠서 왜 그러지 했는데 이 부분은 서현이한테 물어보자.
const practice = document.querySelector(".handle");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  On: function () {
    practice.innerText = "The mouse is here!";
    practice.style.color = colors[0];
  },
  Leave: function () {
    practice.innerText = "The mouse is gone!";
    practice.style.color = colors[1];
  },
  Resize: function () {
    practice.innerText = "You just resized!";
    practice.style.color = colors[2];
  },
  RightClick: function () {
    practice.innerText = "That was a right click!";
    practice.style.color = colors[3];
  }
};

practice.addEventListener("mouseenter", superEventHandler.On);
practice.addEventListener("mouseleave", superEventHandler.Leave);
window.addEventListener("resize", superEventHandler.Resize);
practice.addEventListener("contextmenu", superEventHandler.RightClick);
