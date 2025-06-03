    
    const now = document.createElement('div');
    now.classList.add("cur");
    let posx = 0 ; let  posy = 0 ;
    

    document.body.appendChild(now);

    const box = document.getElementById("box");
    box.addEventListener("mouseover",()=>{
        box.style.backgroundColor = "yellow";
        box.addEventListener("mousemove",(event)=>{
            posx = event.clientX ;
            posy = event.clientY;
            console.log(`${posx} + ${posy}`);
            now.style.left = `${posx - 10}px`;
            now.style.top = `${posy - 10}px`;
            
        })
    })

    box.addEventListener("mouseleave",()=>{
        box.style.backgroundColor = "tomato";
        box.removeEventListener("mousemove",(event)=>{
            posx = event.clientX ;
            posy = event.clientY;
            console.log(`${posx} + ${posy}`);
            now.style.left = `${posx - 10}px`;
            now.style.top = `${posy - 10}px`;
        })
    })

 