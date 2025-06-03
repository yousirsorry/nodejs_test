import React,{useState} from "react" ;
import '/src/Gambling.css';

function Gambling(){

    const [number1 , Setnumber1] = useState(0);
    const [number2 , Setnumber2] = useState(0);
    const [number3 , Setnumber3] = useState(0);
    const [rolled , Setrolled] = useState(0);
    function random_number(){
        return Math.floor((Math.random()*9)+1)
    }
    
    
    function startRolling(e) {
        const bt = e ;
        bt.onClick = null ;
        let delay = 10;
        let count = 0;
        const maxCount = 30;
        const slot = document.getElementById('slot');
        slot.classList.remove('jackpot');
        slot.classList.remove('fail');
        slot.classList.add('wait');
        function roll() {
        const n1 = random_number();
        const n2 = random_number();
        const n3 = random_number();
        Setnumber1(n1);
        Setnumber2(n2);
        Setnumber3(n3);

        count++;

            if (count < maxCount) {
                delay += 10; 
                setTimeout(roll, delay);
                }
            else if(count == maxCount){
                slot.classList.remove('wait');
                
                if(rolled+1%10 == 0 && random_number()> 5 ){
                    Setnumber2(n1);
                    Setnumber3(n1);
                }

                if(n1 == n2 && n1 == n3){
                    slot.classList.add('jackpot');
                }else{
                    slot.classList.add('fail');
                }
            }

            
        }

        roll(); 
        Setrolled(rolled=> rolled + 1);
        
    }

    return(
        <>
            <div className="center" id="slot">
                <ul>
                    <li>{number1}</li>
                    <li>{number2}</li>
                    <li>{number3}</li>
                </ul>
            </div>
            
            <button onClick={(e) => startRolling(e)} > roll </button>
            <div>
                {rolled}
            </div>
        </>
    );
}

export default Gambling ;