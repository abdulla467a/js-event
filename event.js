function makeRed(){
    document.body.style.backgroundColor= 'red';
}

const greenButton =document.getElementById('green-button');

greenButton.onclick = makeGreen;
function makeGreen(){
    document.body.style.backgroundColor= 'green';
}

const blueButton =document.getElementById('make-blue-button');

blueButton.onclick= function makeBlue(){
    document.body.style.backgroundColor= 'blue';
}


const goldenButton = document.getElementById('make-golden');
goldenButton.addEventListener('click',makeGolden )
function makeGolden(){
    document.body.style.backgroundColor= 'goldenrod';
}
