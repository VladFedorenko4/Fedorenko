'use strict'
let elem = document.getElementById("image1");
elem.onclick = function(){
    alert(elem.getAttribute('src'))
};
let elem2 = document.getElementById("image2");
elem2.onclick = function(){
    alert(elem2.getAttribute('src'))
};
let elem3 = document.getElementById("image3");
elem3.onclick = function(){
    alert(elem3.getAttribute('src'))
};



let link1 = document.getElementById("s1");
let link2 = document.getElementById("s2")
let link3 = document.getElementById("s3")

function mouseOver1(event1) {
    event1.target.setAttribute('title', event1.target.innerText)
}
function mouseOut1(event1) {
    event1.target.removeAttribute('title')
}
link1.addEventListener('mouseover', mouseOver1);
link1.addEventListener('mouseout', mouseOut1);
link2.addEventListener('mouseover', mouseOver1);
link2.addEventListener('mouseout', mouseOut1);
link3.addEventListener('mouseover', mouseOver1);
link3.addEventListener('mouseout', mouseOut1);


let link4 = document.getElementById('s4')
let link5 = document.getElementById('s5')
let link6 = document.getElementById('s6')

function mouseOver2(event2) {
    event2.target.innerText = event2.target.innerText + ' (' + event2.target.getAttribute('href') + ')'
    
}
    function mouseOut2(event2) {
        event2.target.innerText = event2.target.innerText.split(' (')[0]
    }
    
    link4.addEventListener('mouseover', mouseOver2)
    link4.addEventListener('mouseout', mouseOut2)
    link5.addEventListener('mouseover', mouseOver2)
    link5.addEventListener('mouseout', mouseOut2)
    link6.addEventListener('mouseover', mouseOver2)
    link6.addEventListener('mouseout', mouseOut2)


let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let demo = document.getElementById('demo')

function blur(event3) {
    demo.innerText += event3.target.value + ' '

}

input1.addEventListener("blur", blur)
input2.addEventListener("blur", blur)
input3.addEventListener("blur", blur)



let paragraphs = document.getElementsByClassName('pr')

function paragraphSquare(event4){
    let num = parseInt(event4.target.textContent)
    let square = num * num
    let squareText = document.createTextNode(square)
    event4.target.innerHTML = ' '
    event4.target.appendChild(squareText)
}
for (let i=0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener('click', paragraphSquare)
}



let inputs = document.getElementsByClassName('pol')

function inputBlur(event5){
    let values = event5.target.value
    let lenghts = event5.target.getAttribute('data-length')
    if (values.length == lenghts){
        event5.target.classList.remove('n');
        event5.target.classList.add('y')
    } else {
        event5.target.classList.remove('y');
        event5.target.classList.add('n')
    }
}
for (let i=0; i < inputs.length; i++){
    inputs[i].addEventListener('blur', inputBlur)
}



let divs = document.getElementsByClassName('in')

function paintRed(event){
    event.target.classList.add('red');
    event.target.classList.remove('green');
    event.target.removeEventListener('click', paintRed);
    event.target.addEventListener('click', paintGreen);
}
function paintGreen(event) {
    event.target.classList.add('green');
    event.target.classList.remove('red');
    event.target.removeEventListener('click', paintGreen);
    event.target.addEventListener('click', paintRed);
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', paintRed);
}