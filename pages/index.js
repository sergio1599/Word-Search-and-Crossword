import Head from 'next/head';
import Titulo from '@components/titulo/titulo';
import Boton from '@components/boton/boton';
import Image from '@components/image/image';
import Footer from '@components/footer/footer';

export default function Home() {
  return (<>
    <Head>
      <title>Parcial TGS 2020-1</title>
      <link rel="icon" href="/icons/information.png"/>
      <link rel={'stylesheet'} type={'text/css'}
            href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'}/>
      <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap"
            rel="stylesheet"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap"
        rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
    </Head>
    <div className={'hero is-fullheight'}>
      <div className={'hero-body'} style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <Titulo titulo={'Parcial TGS'} subtitulo={''}/>
        <br/><br/>
        <div className="columns">
          <div className="column">
            <Image source={'/icons/alphabet.png'} link={'/lettersoup'}/>
            <Boton input={'Ingresar Sopa de letras'} link={'/lettersoup'}/>
          </div>
          <div className="column">
            <Image source={'/icons/crossword.png'}/>
            <Boton input={'Ingresar Crucigrama'} link={'/crossword'}/>
          </div>
        </div>
      </div>
      <div className={'hero-footer'}>
        <Footer/>
      </div>
    </div>
  </>);
}
