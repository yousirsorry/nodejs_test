const button_day_night = document.getElementById('day-night');
/* Particle(); */
button_day_night.onclick = Anim ;
let day = false ;

TreeSpawner('dirt1');

Particle('sky-background');
function random_round(){
    return Math.floor((Math.random()*500)+1);
}

function random(max,min){
    
    return Math.floor((Math.random()*max)+min);
}

function AddAnim( class_name , name_name , time_name){
    const anim = document.querySelectorAll(`.${class_name}`);
    
    anim.forEach(element => {
        element.classList.remove(`${name_name}`);
        element.offsetWidth;
        element.classList.add(`${name_name}`);
        
        element.style.setProperty('--time',`${time_name}`)
    })
}

function Anim(){
    button_day_night.onclick = null ;
    day = true ;
    let time =  1 ;
    AddAnim('needanimb','anim-background',time);
    AddAnim('needanimt','anim-tree',time);
    AddAnim('sun-moon','anim-sun-moon',time);
    AddAnim('sky-background','anim-sky',time);
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
    Pause();
    
}

function Pause() {
    const classes = ['anim-sun-moon', 'anim-tree', 'anim-background','anim-sky'];
    setTimeout(() => {
        classes.forEach(cls => {
            document.querySelectorAll(`.${cls}`).forEach(elem => {
                elem.style.animationPlayState = "paused";
            });
        });
        button_day_night.onclick = Continues;
    }, 4000);
}

function Continues(){
    
    button_day_night.onclick = null ;
    const classes = ['anim-sun-moon', 'anim-tree', 'anim-background','anim-sky'];
        classes.forEach(cls => {
            document.querySelectorAll(`.${cls}`).forEach(elem => {
                elem.style.animationPlayState = "running";
            });
        });
        setTimeout(()=>{
            day = false ;
            button_day_night.onclick = Anim; 
        },4000);
        
}

function Particle(event){
    setInterval(()=>{
        if(!day){
            
            const night = document.getElementById(`${event}`);
            const particle = document.createElement('div');
            night.appendChild(particle);
            particle.classList.add('particle-night');
            let particle_size = random(5,1);
            let particle_oparcity = random(20,1);
            particle.style.height = `${particle_size}px`;
            particle.style.width = `${particle_size}px`;
            particle.style.opacity = `${particle_oparcity/20}`;
            particle.style.top = `${random(100,1)}%`;
            particle.style.left = `${random(100,1)}%`;
            setTimeout(()=>{
            particle.remove();
            },5000);

        }
        
    },10);
}

function TreeSpawner(event){
    let x = 5 ;
    for(i =0; i < x ; i++){
        for(j =0; j < x+4 ; j++){
            if(j!=0){
                
            const tree = document.createElement('div');
            tree.classList.add('tree','center','needanimb');
            tree.style.top = `${-3}%`;
            tree.style.marginTop = "-4.5%" ;
            tree.style.transform = `perspective(50px) translateZ(${-50+i*15}px)`
            tree.style.left = `${j*random(3,7)}%`;
            document.getElementById(event).appendChild(tree);
            const first_layer = document.createElement('div');
            first_layer.classList.add('needanimt','tree-leave-second-layer','center');
            const second_layer = document.createElement('div');
            second_layer.classList.add('needanimt','tree-leave-first-layer','center');
            tree.appendChild(first_layer);
            tree.appendChild(second_layer);
            }

        }
    }
} 


const clock = document.getElementById('clock');
button_day_night.addEventListener('mouseover',()=>{
    clock.style.paddingBottom = "0%";
});
button_day_night.addEventListener('mouseleave',()=>{
    clock.style.paddingBottom = "75px";
});