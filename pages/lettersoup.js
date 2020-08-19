import styles from '@styles/Home.module.css';
import Tabla from '@components/tabla/tabla';
import Titulo from '@components/titulo/titulo';
import Boton from '@components/boton/boton';
import wordsJson from '../functions/words.json';
import wordsearch from '../functions/wordsearch';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <head>
        <title>Sopa de letras</title>
        <link rel={'stylesheet'} type={'text/css'}
              href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'}/>
        <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap"
              rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap"
          rel="stylesheet"/>
      </head>
      <div className="column">
        <Titulo titulo={'Parcial TGS'} subtitulo={'Sopa de letras'}/>
        <Tabla {...props} />
      </div>
      <div className="columns">
        <div className="column">
          <Boton input={'Volver'} link={'/'}/>
        </div>
        <div className="column">
          <Boton input={'Reiniciar'} link={'/lettersoup'}/>
        </div>
      </div>
    </div>
  );

}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getServerSideProps = async () => {
  const shuffledWords = shuffle([...Object.keys(wordsJson)]);
  const words = shuffledWords.slice(0, 3)
    .sort((a, b) => {
      return b.length - a.length;
    });
  const longestWord = words[0];
  const size = Math.ceil(longestWord.length * 1.3);
  const wordsearchs = await wordsearch(words, size, size);

  const newWords = {};
  shuffledWords.forEach((key) => {
    newWords[key] = wordsJson[key];
  });
  return { props: { ...wordsearchs, wordsJson: newWords } };
};
