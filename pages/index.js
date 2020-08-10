import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Counter from '@components/counter/counter'
import Tabla from "@components/tabla/tabla";
import Titulo from "@components/titulo/titulo";
import Boton from "@components/boton/boton";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <title>Parcial TGS 2020-1</title>
        <link rel="icon" href="/resources/icons/logoUptc.png" />
        <link rel={'stylesheet'} type={'text/css'} href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'}/>
        <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet"/>

      </Head>

      <Counter valorInicial={0} final={"Jahir"}/>
      <Titulo titulo={"Parcial TGS"} subtitulo={"Sopa de letras"}/>
      <Tabla/>
      <Boton entrada={"Finalizar"}/>

    </div>
  )
}
