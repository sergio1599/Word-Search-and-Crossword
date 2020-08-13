
import styles from './boton.module.css';
const Boton =({input, link}) =>{
    return (<div className={styles.boton}>
            <a href={link} className="button is-success is-rounded">{input}</a>
        </div>
    )
}

export default Boton;