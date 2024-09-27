function lines() {
    let sizeW = Math.random() * 15;
    let duration = Math.random() * 3;
    let rollColor = Math.random() * 2;
    let e = document.createElement('div');
    e.setAttribute("class","circle");
    home.appendChild(e);
    e.style.width = 2+sizeW+ "px";
    e.style.left = Math.random() * innerWidth + "px"
    e.style.animationDuration = 2 + duration + "s";
    if (rollColor < 1) {
        e.style.background = "rgb(238, 85, 238)";
        e.style.boxShadow = "0 0 10px rgb(238, 85, 238), 0 0 20px rgb(238, 85, 238), 0 0 30px rgb(238, 85, 238), 0 0 50px rgb(238, 85, 238)"
        
    }

    setTimeout(() => {
        home.removeChild(e)
    },5000);
}

setInterval( () => {
    lines()
},200);