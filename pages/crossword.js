import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Tabla from "@components/tabla/tabla";
import Titulo from "@components/titulo/titulo";
import Boton from "@components/boton/boton";

export default function Home(){
    return(
        <div className={styles.container}>
            <head>
                <title>Crucigrama</title>
            </head>
            <div className="columns is-desktop is-mobile">
                <Titulo titulo={"Parcial TGS"} subtitulo={"Crucigrama"}/>
                <Boton entrada={"Volver"}/>
            </div>

        </div>
    )
}