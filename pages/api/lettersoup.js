import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Tabla from "@components/tabla/tabla";
import Titulo from "@components/titulo/titulo";
import Boton from "@components/boton/boton";
import Counter from "@components/counter/counter";

export default function Home(){
    return(
        <div className={styles.container}>
            <head>
                <title>Sopa de letras</title>
            </head>
            <div className="columns is-desktop is-mobile">
                <Counter valorInicial={0} final={"Jahir"}/>
                <Titulo titulo={"Parcial TGS"} subtitulo={"Sopa de letras"}/>
                <Tabla/>
                <Boton entrada={"Volver"}/>
            </div>
        </div>
    )

}