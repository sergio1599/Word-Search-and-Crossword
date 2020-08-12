
import styles from './boton.module.css';
const Boton =({input, action}) =>{
    return (<>
            <button className="button is-success is-rounded" onClick={action}> {input} {action}</button>
        </>
    )
}

export default Boton;