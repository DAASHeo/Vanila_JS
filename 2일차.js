//const는 값을 업데이트하지 못함
//let은 값을 업데이트할 수 있음
//규칙 -> 항상 const를 사용하되 가끔씩 필요하다면 let을 사용하고, 절대 절대로 var을 사용하지 말 것이다.
//왜냐하면, var은 오래된 자바스크립트고, var을 쓰면 let, const처럼 구분을 할 수 없게 된다.
//const a = null;
//null은 비어있음을 뜻함. 변수안에 아무것도 없다는 것을 확실히 해두고 싶을때 사용함
//null은 변수에 할당되는 값이다.
//undefined : 변수에 값을 부여하지 않은 상태를 의미함

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fir', 'sat', 'sun'];
//인덱스는 마찬가지로 0부터 시작
console.log(daysOfWeek)
daysOfWeek.push("일주일")//배열에 데이터 추가

//Object
const playerName = 'eun';
const playerPoints = 1212;
const playerHandsome = true;
const playerFat = "thin"

const player = {
    //특성 작성
    name : 'nico',
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.points = 15; //프로퍼티 업데이트
//프로퍼티 추가 
player.lastName = "potato"