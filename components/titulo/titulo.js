
import styles from './titulo.module.css';
const Titulo =({titulo, subtitulo}) =>{

    return(<div className={styles.titulo}>
        <p className="title is-1 has-text-primary-dark" >{titulo}</p>
        <p className="subtitle is-5 has-text-link-dark" align={"center"}>{subtitulo}</p>
        <p></p>
        </div>
        )
}

export default Titulo;