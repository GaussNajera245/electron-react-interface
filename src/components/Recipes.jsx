import React, { useState, useEffect } from 'react';

export default function Recipes() {
    const [state, setState] = useState(0);
    useEffect( _ => {
        const elvenShield = { A: 90, B: 90, C: 90, D: 90 },
            elvenShield1 = { A1: 90, B1: 90, C1: 90, D1: 90 },
            A = { ...elvenShield1, ...elvenShield };

        console.table(A);
    },[])
    
    const style =[
        { display: 'inline-block', backgroundColor: '#7b38d8', borderRadius: 10, border: '4px double #cccccc', color: '#eeeeee', textAlign: 'center', fontSize: 28, padding: 20, width: 200, cursor: 'pointer',margin: 5 },
        { backgroundColor: '#4CAF50', fontFamily: "'sans', Serif", fontSize:50, width:500},
        { backgroundColor: '#f44336', fontFamily: "'Gill Sans Extrabold', Helvetica, sans-serif", fontSize:2, width:50, borderRadius:500 }
    ];
    
    const changeState = () =>  setState(A => (A+1)%3);

    return (
        <div>

            <button onClick={changeState} style={style[state]}>Click me</button>
        </div>
    )
}