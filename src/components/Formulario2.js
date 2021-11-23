import React, { useRef } from 'react';

function Formulario2(props) {
    const input = useRef()
    const file = useRef()
    const time = useRef()

    const submit =()=>{        
        console.log(input.current.value)        
        console.log(file.current.files[0])        
        console.log(time.current.value)        
    }


    return (
        <div>
            <div>
                <span>Nombre: </span>
                <input type='text' name='campo' ref={input} /><br/><br/>
                <span>Archivo: </span>
                <input type='file' ref={file} /><br/><br/>
                <span>Fecha:</span>
                <input type='time' ref={time} /><br/><br/>
            </div>
            <input type='submit' value='Enviar' onClick={submit}/>
            
        </div>
    );
}

export default Formulario2;