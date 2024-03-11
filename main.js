    const button = document.querySelector('button');
    const body =    document.querySelector('h1');
    const colors = ['orange', 'green', 'blue', 'yellow', 'pink', 'purple'];


    function changeBackground(){
        const colorIndex= parseInt(Math.random()*colors.length);
        body.style.backgroundColor = colors[colorIndex];
    }


    body.style.backgroundColor = 'orange';
    button.addEventListener("click", changeBackground);

