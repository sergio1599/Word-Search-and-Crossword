import styles from './counter.module.css';
import {useState} from 'react';
const Counter = ({valorInicial, final}) => {

    const [valorActual,actualizarValor] = useState(valorInicial);
    return (<>
        <p>Contador:{valorActual}</p>
            <button onClick={()=> {actualizarValor(valorActual+1);}} >Incremento</button>
        </>
    )

}
export default Counter;