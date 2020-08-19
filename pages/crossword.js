import styles from '@styles/Home.module.css';
import Titulo from '@components/titulo/titulo';
import Boton from '@components/boton/boton';
import wordsJson from '../functions/words.json';
import Crossword from '../functions/crossword';
import TablaCrucigrama from '@components/tabla-crucigrama/tabla-crucigrama';

export default function Home(props) {

  // console.log(props);

  return (
    <div className={styles.container}>
      <head>
        <title>Crucigrama</title>
        <link rel="icon" href="/icons/information.png"/>
        <link rel={'stylesheet'} type={'text/css'}
              href={'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'}/>
        <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@500&display=swap"
              rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap"
          rel="stylesheet"/>
      </head>
      <div className="column">
        <Titulo titulo={'Parcial TGS'} subtitulo={'Crucigrama'}/>
        <TablaCrucigrama {...props}/>
      </div>
      <div className="columns">
        <div className="column">
          <Boton input={'Volver'} link={'/'}/>
        </div>
        <div className="column">
          <Boton input={'Reiniciar'} link={'/crossword'}/>
        </div>
      </div>
    </div>
  );

}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getServerSideProps = async () => {
  const words = shuffle([...Object.keys(wordsJson)]).slice(0, 6);
  const newWords = {};
  words.forEach((key) => {
    newWords[key] = wordsJson[key];
  });

  const { grid: cw } = Crossword(words, words, 50);

  const csGrid = cw.map((row) => {
    return (row || []).map((col) => {
      if (col) {
        return {
          ...col,
          across: col.across
            ? { ...col.across, first: col.across.is_start_of_word }
            : null,
          down: col.down ? { ...col.down, first: col.down.is_start_of_word } : null,
        };
      } else {
        return { char: '-' };
      }
    });
  });

  const wordsWithPositions = words.map(
    (it) => ({ word: it, description: wordsJson[it], positions: [] }));
  const altCwGrid = csGrid.map((row, i) => {
    return (row || []).map((col, j) => {
      if (col.across) {
        wordsWithPositions[col.across.index].positions =
          [...(wordsWithPositions[col.across.index].positions || []), [col.char, i, j]];
      }
      if (col.down) {
        wordsWithPositions[col.down.index].positions =
          [...(wordsWithPositions[col.down.index].positions || []), [col.char, i, j]];
      }
      return [col.char, i, j];
    });
  });

  return { props: { wordsJson: newWords, grid: csGrid, altGrid: altCwGrid, wordsWithPositions } };
};
