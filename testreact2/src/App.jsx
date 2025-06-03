import { useState } from "react";
import './App.css';
import './uicons-brands.css';
export default function App() {
  const [number , setnumber] = useState(0);
  const [text , settext] = useState('');
  function Change(e){
    settext(e.target.value);
    
  }
  function Particle(){
    setInterval(() => {
      const particle = document.createElement('div');
      const posy = Math.floor(Math.random()*(window.innerHeight));
      const posx = Math.floor(Math.random()*window.innerWidth);
      const size = Math.floor(Math.random()*10)+5;
      particle.classList.add('particle');
      particle.style.setProperty('--top',posy);
      particle.style.setProperty('--left',posx);
      particle.style.setProperty('--size',size);
      document.body.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 3500);
    }, 750);
  }

  return (
    <>
      
      <div className="center show"onLoad={Particle()}>
        
        <h2 id="text">
            {text};
        </h2>
        <input type="text" onChange={
        (e)=>Change(e)
        } />
      </div>
      

    </>
  );
}
