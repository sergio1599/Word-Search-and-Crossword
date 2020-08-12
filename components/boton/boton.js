
import styles from './boton.module.css';
const Boton =({input, action}) =>{
    return (<div className={styles.boton}>
            <button className="button is-success is-rounded" onClick={action}> {input} {action}</button>
        </div>
    )
}

export default Boton;