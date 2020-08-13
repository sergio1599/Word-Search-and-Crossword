import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Tabla from "@components/tabla/tabla";
import Titulo from "@components/titulo/titulo";
import Boton from "@components/boton/boton";
import Counter from "@components/counter/counter";

export default function Home() {
    return (
        <div className={styles.container}>
            <head>
                <title>Sopa de letras</title>
                <link rel={'stylesheet'} type={'text/css'}
                      href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'}/>
                <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap"
                      rel="stylesheet"/>
            </head>
            <div className="is-block-desktop-only is-inline-touch">
                <div className="column">
                    <Titulo titulo={"Parcial TGS"} subtitulo={"Sopa de letras"}/>
                    <Tabla/>
                    <Boton input={"Volver"} link={'/'}/>
                </div>
            </div>
        </div>
    )

}