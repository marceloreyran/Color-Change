const button = document.querySelector('button');
const body =    document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];


function changeBackground(){
    const colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}


body.style.backgroundColor = 'purple';
button.addEventListener("click", changeBackground);