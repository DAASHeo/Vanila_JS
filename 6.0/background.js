const images = [
    "0.jpg",
    "1.png",
    "2.png"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); //html element 생성

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);//html body의 맨 아래에 넣어줌(script보다는 앞에)
//반대로 html body의 맨위에 넣고싶다면 document.body.prepend() 사용