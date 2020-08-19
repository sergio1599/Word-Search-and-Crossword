import { useState } from 'react';
import styles from './tabla.module.css';

const Tabla = (props) => {
  const data = props;
  const [selectedLetters, setSelectedLetters] = useState([]);

  if (!data) {
    return <p>Cargando sopa de letras</p>;
  }

  const isSelected = (x, y) => {
    for (let i = 0; i < selectedLetters.length; i++) {
      const letter = selectedLetters[i];
      if (letter[0] === x && letter[1] === y) return true;
    }
    return false;
  };

  const updateLetter = (letter) => {
    if (!isSelected(letter[0], letter[1])) {
      setSelectedLetters([...selectedLetters, letter]);
    } else {
      setSelectedLetters(selectedLetters.filter((it) => {
        return !(it[0] === letter[0] && it[1] === letter[1]);
      }));
    }
  };

  const getSelectedWords = () => {
    return Object.keys(data.placed || {}).map((it) => {
      let count = 0;
      data.placed[it].forEach((letter) => {
        if (isSelected(letter[0], letter[1])) count += 1;
      });
      if (count >= data.placed[it].length) {
        return it;
      } else {
        return null;
      }
    }).filter(it => it);
  };

  const showWordDescription = (word) => {
    window.alert(data.wordsJson[word]);
  };

  let solved = 0;
  const actualWords = Object.keys(data.placed || {});
  for (let i = 0; i < actualWords.length; i++) {
    if (getSelectedWords().includes(actualWords[i])) solved += 1;
  }
  if (solved >= actualWords.length) window.alert('Sopa de Letras completa!');

  return (<>
    <div className="table-container">
      <table
        className={`table is-bordered is-striped is-narrow is-hoverable is-fullwidth ${styles.table}`}
        border={1}>
        <tbody>
          {data.grid.map((row, i) => {
            return <tr key={i}>{row.map((col, j) => {
              return <td
                key={j}
                className={isSelected(j, i) ? styles.selected : ''}
                onClick={() => { updateLetter([j, i]); }}>
                {col}
              </td>;
            })}</tr>;
          })}
        </tbody>
      </table>
    </div>
    <br/>
    <div className={styles.fontLetters}>
      <p><b className={styles.fontTittle}>Palabras:</b></p>
      <ul className={styles.words}>
        {Object.keys(data.placed || {}).map((it, i) => {
          return (<li key={i} className={getSelectedWords().includes(it) ? styles.solved : ''}
                      onClick={() => showWordDescription(it)}>
            {it}
          </li>);
        })}
      </ul>
    </div>
  </>);
};

export default Tabla;
