
import styles from './titulo.module.css';
const Titulo =({titulo, subtitulo}) =>{

    return(<div className={styles.titulo}>
        <p className="title is-1" >{titulo}</p>
        <p className="subtitle is-5" align={"center"}>{subtitulo}</p>
        <p></p>
        </div>
        )
}

export default Titulo;