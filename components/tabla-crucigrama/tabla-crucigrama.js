import { useState } from 'react';
import styles from './tabla-crucigrama.module.css';
import TablaCrucigramaTd from '@components/tabla-crucigrama/tabla-crucigrama-td';

const TablaCrucigrama = (props) => {
  const data = props;
  const defFilledLetters = (props.wordsWithPositions || []).map(() => []);
  const [filledLetters, updateFilledLetters] = useState(defFilledLetters || []);

  const crossWordSelectedLettersUpdate = (action) => {
    switch (action.type) {
      case 'update':
        const newData = [...filledLetters];
        const [char, x, y] = action.payload;
        for (let i = 0; i < action.indices.length; i++) {
          const wordIndex = action.indices[i];
          const preData = { ...(newData[wordIndex] || {}) };
          preData[`${x}-${y}`] = char;
          newData[wordIndex] = { ...preData };
        }
        updateFilledLetters([...newData]);
        break;
      default:
        updateFilledLetters([...filledLetters]);
        break;
    }
  };

  if (!data) {
    return <p>Cargando crucigrama</p>;
  }

  const checkIfWordIsSolved = (index) => {
    try {
      const wordLettersPositions = props.wordsWithPositions[index].positions || [];
      const [first, second] = wordLettersPositions;
      const sortByY = first[1] === second[1];
      console.log(filledLetters);
      const preFilledLetters = filledLetters[index];
      const filledLettersPositions = Object.keys(preFilledLetters).map((key) => {
        const [a, b] = key.split('-');
        return [preFilledLetters[key], parseInt(a, 10), parseInt(b, 10)];
      }).sort((a, b) => {
        const actA = sortByY ? a[2] : a[1];
        const actB = sortByY ? b[2] : b[1];
        return actA - actB;
      });
      const filledWord = filledLettersPositions.map((it) => it[0]).join('').toLowerCase();
      if (filledWord.length <= 0) return '';
      const word = wordLettersPositions.map((it) => it[0]).join('').toLowerCase();
      console.log(`${word} <-> ${filledWord}`);
      return word.toLowerCase() === filledWord.toLowerCase() ? styles.solved : '';
    } catch (e) {
      console.error(e);
      return '';
    }
  };

  let solved = 0;
  for (let i = 0; i < props.wordsWithPositions.length; i++) {
    if (checkIfWordIsSolved(i)) solved += 1;
  }
  if (solved >= props.wordsWithPositions.length) window.alert('Crucigrama completo!');

  return (<>
    <div className={`table-container ${styles.tablecontainer}`}>
      <table
        className={`table ${styles.table}`}
        border={1}>
        <tbody>
          {data.grid.map((row, i) => {
            return <tr key={i}>{row.map((col, j) => {
              const classNameA = col.char === '-' ? styles.black : '';
              return <TablaCrucigramaTd
                key={j}
                className={classNameA}
                letter={col}
                x={i} y={j}
                originalWords={data.wordsWithPositions || []}
                updateFilledLetters={crossWordSelectedLettersUpdate}/>;
            })}</tr>;
          })}
        </tbody>
      </table>
    </div>
    <br/>
    <div className={styles.fontLetters}>
      <div className={styles.fontTittle}>
       <p><b>Descripciones:</b></p>
      </div>
      <ul className={styles.words}>
        {(props.wordsWithPositions || []).map((word, i) => {
          return (
            <li key={i} className={checkIfWordIsSolved(i)}
                onClick={() => { window.alert(word.word); }}>
              <p><b>{i + 1}.</b> {word.description}</p>
            </li>);
        })}
      </ul>
    </div>
  </>);
};

export default TablaCrucigrama;
