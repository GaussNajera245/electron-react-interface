import "../styles/index.css"
import React from 'react';

export default function App(){
    

const elvenShield= {
    A:90,
    B:90,
    C:90,
    D:90
}

const elvenShield1= {
    A1:90,
    B1:90,
    C1:90,
    D1:90
}

const A = {
    ...elvenShield1,
    ...elvenShield,
};

function rand(I){
    return (I - Math.floor(Math.random()*10))
}
let DOM = document.getElementsByTagName('body')[0], i=5;
setInterval(()=>{
    let A = Math.floor()
    i = (i >= 255) ? 5 : i;
    i+=10;
    DOM.style.backgroundColor =  `rgb(${rand(i)-5},${rand(i)},${rand(i)})`;
},500);


console.table(A);



    return (
        <div>
            <section className="hero"> </section>
            <main>
                <section className="hero">
                <h1>I'm reahhct now b?</h1> 
                <h3>kynccc</h3> 
                </section>
            </main>
        </div>
    )
};
