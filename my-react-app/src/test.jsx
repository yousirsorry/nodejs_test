import React,{useState} from "react";

function Test(){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [colour , setColour] = useState('black');
    function handleInputChange(e) {
        const valueLength = e.target.value.length;
        setY(valueLength);

        if (valueLength >= 5) {
            setColour('red');
        } else {
            setColour('black');
        }
    }
    

    return(
        <>
            <input style={{background: colour ,color: 'white'}} type="text" onChange = {handleInputChange}/>
            <button onClick={()=>setX(x+1)}>
                {x}
            </button>
            <div>
                {y}
            </div>
        </>
    );
}

export default Test ;