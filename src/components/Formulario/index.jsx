import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("Iniciou");

        return () => {
            console.log("Terminou")
        }
    },[]);

    useEffect(() => {
        //console.log("o estado nome mudou")
    },[nome])

    useEffect(() => {
        //console.log("A nota é "+ materiaA)
    },[materiaA])


    const alteraNome = (evento) => {
        //console.log(evento)
        //setNome(evento.target.value)
        setNome(estadoAnterior => {
            //estadoAnterior;

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return(
                <p>***** {nome} você foi aprovado sua média é {media}</p>
            )
        }else {
            return (
                <p>***** {nome} você não foi aprovado  sua média é {media}</p>
            )
        }
    }

    return (
        <form>

            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>))}
            </ul>
            <input type="number" placeholder="nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <h2>{renderizaResultado()}</h2>
        </form>
    )
}

export default Formulario