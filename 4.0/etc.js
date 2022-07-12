//______________________________________
const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();//이것을 이용하게되면 event는 멈추게 되고 아무 것도 진행되지 않을 것이다.
    // console.log(event);
    console.dir(event);
    alert("clicked!");//alert창이 나타나면서 브라우저의 기본 동작이 실행되지 않고, 확인 버튼을 눌러야 실행됨

}

link.addEventListener("click",handleLinkClick);
//-> handleLinkClick({information about the event that just happened})
//자바스크립트는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다.
//이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
//방금 일어난 event에 대한 정보를 담은 이 object는 handleLinkClick를 위한 EventListener함수의 첫번째 인자로 주어지게 된다.
//제일 중요한것은 addEventListener안에 있는 함수는 직접 실행하지 않는 것이다
//함수 실행은 우리가 하는 것이 아니라 브라우저가 해주는 것이다.
//또한, 브라우저는 실행만 시켜주는게 아니라 event에 대한 정보도 담아줄 것이다.


//console.log(event);
//->나의 경우에는 니코쌤과는 다르게 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}가
//떴는데 이것은 컴퓨터 운영체제에 따라 다르게 나오는 것 같다는 답변을 받았다(IOS->PointerEvent, Windows->MouseEvent)
