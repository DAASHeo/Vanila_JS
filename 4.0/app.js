// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USENAME_KEY = "username";
//대문자로 작성하는 이유 : 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용함
//그리고 이것과 같은 경우에는 loginForm이나 loginInput처럼 중요한 정보를 담은게 아니라서 대문자로 작성함.

function onLoginSubmit(event){

    event.preventDefault();//브라우저의 기본 동작이 실행되는 걸 막아주고 있음
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USENAME_KEY, username);
    //greeting.innerHTML = "Hello " + username;
    ////greeting.innerHTML = `Hello ${username}`; //위와 같은 표현 방법
    //규칙 1. 내가 만약 변수와 string을 결합하고 싶다면 , 또는 변술르 string안에 집어널고 싶다면 
    // ${변수명} 이렇게 표현하면 끝
    //규칙 2. ``으로 감싸져야 한다.
    //맥북에서의 백탁표시의 경우 영어인 상태에서 ~이 있는 곳 누르면 된다.(`)
    //greeting.classList.remove(HIDDEN_CLASSNAME)
    // if(username === ""){
    //     alert("Please write your name.");
    // }
    // else if(username.length > 15){
    //     alert("Your name is too long.")
    // } //Html(브라우저)에서 제공하는 기능을 사용해서 적용할 수 있다.
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);
//----------------------
// function onLoginSubmit(tomato){
    
//     console.log(tomato);
//     //function이 하나의 argument를 받도록 하고 그걸 JS에 넘겨주고 있음
// }

//모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 될 것이다.


//localStorage는 우리가 브라우저에 뭔가를 저장할 수 있게 해준다. 그래서 나중에 가져다 쓸 수 있디.

//localStorage.setItem("우리가 저장할 값의 이름(변수명)","저장할 값") : localStorage에 정보를 저장할 수 있다.
//localStorage.getItem("변수명") : 저장한 데이터를 가져옴
//localStorage.remmoveItem("") : 삭제

const savedUsername = localStorage.getItem(USENAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}










