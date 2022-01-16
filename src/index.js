const elvenShield= {
    A:90,
    B:90,
    C:90,
    D:90
}

const elvenShield1= {
    A:90,
    B:90,
    C:90,
    D:90
}

const A = {
    elvenShield1,
    elvenShield,
    Y:{ty:2,op:5}
};


let DOM = document.getElementsByTagName('body')[0], i=5;
setInterval(()=>{
    i = (i >= 255) ? 5 : i;
    i+=10;
    DOM.style.backgroundColor =  `rgb(${i-2},${i-10},${i-9})`;
},500);


console.table(A)