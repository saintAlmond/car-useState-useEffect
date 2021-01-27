import React, { useState, useEffect } from  'react';

const Car = () => {
 
    // const [started,setStarted]= useState(false); //booleano
    // const [countKm, setCountKm]= useState(0); //numerico
    const [carState, setCarState]=useState({
        started: false,
        countKm: 0
    })
//comprueba el estado del componente
    useEffect(()=>{
        document.title = `Coche ${carState.started}`;
    }, [carState.started]);

    //necesitamos la funcion para chequear el estado del coche si esta encendido o no.
    const checkStateCar = () =>{
        //el estado inicial es false
        if(carState.started) {
            return <span style={{color:"green"}}>Encendido</span>
        }
        return <span style={{color:"red"}}>Apagado</span>
    }
    //funcion para incrementar km. Se pasa valor number porque le paso un valor numerico
    const increaseKm = (num) =>{
        if (carState.started) {
            setCarState({
                ...carState,
                countKm: carState.countKm + num
            });
        }else{
            alert("El coche esta apagado");
        }
        
    }

    return (
        <div>
            <h2>Nuestro coche esta: {checkStateCar()} </h2>
            <h2>Kilometros recorridos: {carState.countKm} km</h2>
            {/* //boton para encender o apagar */}
            <button onClick={()=> {
                setCarState({
                    ...carState,
                    started: !carState.started
                })
            }}
            >
                Encender / Apagar
            </button>
            {/* //boton para incrementar kilometros */}
            <button onClick={()=>{
                increaseKm(5);
            }}
            >
                Incrementar kilometros
            </button>
        </div>
    )


}

export default Car;