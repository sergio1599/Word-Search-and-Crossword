import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Counter from '@components/counter/counter'
import Tabla from "@components/tabla/tabla";
import Titulo from "@components/titulo/titulo";
import Boton from "@components/boton/boton";
import Image from "../image/image";
import Footer from "@components/footer/footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Parcial TGS 2020-1</title>
                <link rel="icon" href="/icons/information.png"/>
                <link rel={'stylesheet'} type={'text/css'}
                      href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'}/>
                <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap"
                      rel="stylesheet"/>
            </Head>
            <div className="columns is-mobile is-desktop">
                <Titulo titulo={"Parcial TGS"} subtitulo={""}/>
            </div>
            <div className="columns is-desktop is-mobile">
                <div className="column">
                    <Image source={'/icons/alphabet.png'} />
                    <Boton input={"Ingresar Sopa de letras"} action={""}/>
                </div>
                <div className="column">
                    <Image source={'/icons/crossword.png'}/>
                    <Boton input={"Ingresar Crucigrama"}/>
                </div>
            </div>
            <div className="columns is-desktop is-mobile">
                <Footer/>
            </div>
        </div>
    )
}
