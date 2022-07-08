// const h1 = document.querySelector(".hello")

// function handleTitleClick(){
//     if(h1.style.color === "blue"){
//         h1.style.color = "tomato";
//     }
//     else{
//         h1.style.color = "blue";
//     }
// }
// 변수를 사용하여 코드 변경해보자 
// function handleTitleClick(){
//     const currentColor = h1.style.color
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }
//     else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click",handleTitleClick);

//-------------------------------------
//## 크리닝 코드 - 1
// const h1 = document.querySelector(".hello")

// function handleTitleClick(){
//     if(h1.className === "active"){
//         h1.className = "";
//     }
//     else{
//         h1.className = "active"
//     }
// }

// h1.addEventListener("click",handleTitleClick);

//클릭할 때 class를 추가하고, 또 다시 클릭할 때 class를 제거하기 function

//예시)
// const clickedClass = "clicked"; //className을 잘못 입력할 오류를 방지하기 위함

// if (h1.className === clickedClass) { //className이 active와 같은지 확인
// h1.className = ""; //클릭하면 className 추가
// } else {
// h1.className = clickedClass; //
// }

//------------------------------

//className이 아닌 classList를 사용하자
//classList : element의 class 내용물을 조작하는 것을 허용한다.
//contains() : 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다. 
// const h1 = document.querySelector(".hello");

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)){ //만약에 이 clickedClass가 h1의 classList에 포함되어 있다면,
//         h1.classList.remove(clickedClass);
//     }
//     else{//만약에 이 clickedClass가 h1의 classList에 포함되어 있지 않다면,
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click",handleTitleClick);
//classList.remove() , classList.add() : 해당하는 element 클래스 리스트에 클래스를 삭제하거나 추가한다.

//------------------------------

//classList.toggle() : classList에 class name이 존재하는지 확인
//-> 만약 class name이 존재한다면 toggle은 class name을 제거함. 
//반대로 class name이 존재하지 않는다면 toggle은 class name을 추가함.

const h1 = document.querySelector(".hello");

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);


//5일차 과제 
// const body = document.querySelector("body");
// const h1 = document.querySelector("body h1");

// h1.style.color = "white";

// function WindowResize() {
//   let windowsize = window.innerWidth;
//   if (windowsize < 500) {
//     body.style.backgroundColor = "blue";
//   } else if (500 < windowsize && windowsize < 1000) {
//     body.style.backgroundColor = "purple";
//   } else {
//     body.style.backgroundColor = "yellow";
//   }
// }

// window.addEventListener("resize", WindowResize);
