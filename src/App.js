import React, {useState} from "react";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
function Welcome2({name, children}) {
    return <h1>Hello, {name}</h1>
}

function Vehicule(roue: number, nbPassager:number) {
    if (roue<2){
        throw Error("too few wheel");
    }
    if (roue>4){
        throw Error("too much wheel");
    }
    return(
        <div>
            <p>nbRoue: {roue}</p>
            <p>nbPassager: {nbPassager}</p>
        </div>
    );
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function rdVehicule(){
    return <Vehicule roue={getRandomInt(5)} nbPassager={getRandomInt(100)} />
}

const listvehicules = [Vehicule(4,5),Vehicule(4,5)];
function App() {
    const [roue,setRoue] = useState(4);
    const changRoue = () => setRoue(roue+1);
    return (
        <div>Ceci est une phrase d'exemple {rdVehicule()}
        Allo</div>
    )
}

export default App;