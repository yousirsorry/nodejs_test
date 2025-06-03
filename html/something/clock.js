
function random_round(){
    return Math.floor((Math.random()*500)+1);
}

function random_day(){
    
    return Math.floor((Math.random()*5)+3);
}
function Anim(){
    
    let time = random_day();
    const animb = document.querySelectorAll(".needanimb");
    animb.forEach(element => {
        element.classList.remove("anim-background");
        element.offsetWidth;
        element.classList.add("anim-background");
        
        element.style.setProperty('--time',`${time}`)
    })
    const animt = document.querySelectorAll(".needanimt");
    animt.forEach(element => {
        element.classList.remove("anim-tree");
        element.offsetWidth;
        element.classList.add("anim-tree");
        
        element.style.setProperty('--time',`${time}`);
    });

    const sun_moon = document.getElementById('sun-moon');
    sun_moon.classList.remove("anim-sun-moon");
        sun_moon.offsetWidth;
        sun_moon.classList.add("anim-sun-moon");
        
        sun_moon.style.setProperty('--time',`${time}`);


    const animc = document.querySelectorAll(".needanimc");
    animc.forEach(e => {
        let x = random_round();
        let save = getComputedStyle(e);
        let output = save.getPropertyValue('--round').trim();
        let value = parseFloat(output);
        e.style.setProperty('--time',`${time*2+3.5}s`);
        e.style.setProperty('--start',`${value}`);
        e.style.setProperty('--round', `${value+x}`);
        e.classList.remove("anim-clock");
        e.offsetWidth;
        e.classList.add("anim-clock");
    });
}


