let colors = ["blue","orange","red","black","green","yellow","brown"];
var counter = 1;
let button = document.getElementById('btn');
let resetbutton = document.getElementById('resetBtn');
button.addEventListener('click',function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    let divClass = document.getElementById("myDiv1");
    divClass.style.background = randomColor;
    let para = document.getElementById("para");
    if(para!=null){
        divClass.removeChild(para);
    }
    divClass.appendChild(create(randomColor,counter++));
});


resetbutton.addEventListener('click',function(){
    let divClass = document.getElementById("myDiv1");
    let para = document.getElementById("para");
    divClass.style.background="red";
    counter = 1;
    divClass.removeChild(para);
});

function create(randomColor,counter){
    const element = document.createElement("p");
    element.id="para";
    element.innerText = `My Color is : ${randomColor.charAt(0).toUpperCase() + randomColor.slice(1)} Counter is : ${counter}`;
    element.style.fontSize = "40px";
    element.style.color="White";
    element.style.textAlign="center";
    element.style.verticalAlign="center";
    element.classList.add("element");
    return element;
}
