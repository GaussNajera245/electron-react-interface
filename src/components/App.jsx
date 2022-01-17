import "../styles/index.css";
import Recipes from './Recipes';
import React, { useEffect, useState } from 'react';
const { ipcRenderer } = window.require('electron')
// const electron = window.require("electron")
// const { ipcRenderer } = electron;

export default function App() {
    const [info, setInfo] = useState("Don't know:(");
    useEffect(() => {

        const rand = I => (I - Math.floor(Math.random() * 10));
        let DOM = document.getElementsByTagName('body')[0], i = 5;
        setInterval(() => {
            i = (i >= 255) ? 5 : i;
            i += 10;
            DOM.style.backgroundColor = `rgb(${rand(i) - 5},${rand(i)},${rand(i)})`;
        }, 500);

        console.get = () => {
            ipcRenderer.invoke('info')
                .then(res => setInfo(`${res}`))
                .catch(e => console.table(e));
        };

    }, []);

    return (
        <div>
            <section className="hero"> </section>
            <main>
                <section className="hero">
                    <h1>Current Status: </h1>
                    <h3>{info}</h3>
                </section>
                <Recipes />
            </main>
        </div>
    )
};
