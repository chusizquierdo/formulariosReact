import React from 'react';

function Formulario1(props) {
    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
        console.log(Object.fromEntries(data))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <span>
                        Lala
                    </span>
                    <input name="campo" />
                </div>
                <input name="campo-2" /><br />
                <input type="submit" value="Enviar" />

            </form>

        </div>
    );
}


export default Formulario1;