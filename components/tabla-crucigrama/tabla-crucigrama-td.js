import { useState } from 'react';

const TablaCrucigramaTd = ({ letter = '', x = 0, y = 0, originalWords = [], updateFilledLetters, className }) => {
  const [inputLetter, setInputLetter] = useState('');
  if (letter.char === '-') return (<td className={className}/>);

  const renderWordIndex = () => {
    const horizontalIndex = letter.across
      ? letter.across.first ? (letter.across.index + 1) : -1
      : -1;
    const verticalIndex = letter.down
      ? letter.down.first ? (letter.down.index + 1) : -1
      : -1;

    let text = '';
    if (horizontalIndex >= 0 && verticalIndex >= 0) {
      text = `${verticalIndex} / ${horizontalIndex}`;
    } else if (horizontalIndex >= 0) {
      text = `${horizontalIndex}`;
    } else if (verticalIndex >= 0) {
      text = `${verticalIndex}`;
    }
    if (text.length <= 0) return (<></>);
    return (<span>{text}</span>);
  };

  const updateLetter = (inputText) => {
    const safeInput = (inputText
      ? inputText.length > 1
        ? inputText.split('')[0] : inputText
      : '').toLowerCase();
    setInputLetter(safeInput);
    const horizontalIndex = letter.across ? letter.across.index : -1;
    const verticalIndex = letter.down ? letter.down.index : -1;
    if (horizontalIndex >= 0 || verticalIndex >= 0) {
      updateFilledLetters({
        type: 'update',
        indices: [horizontalIndex, verticalIndex],
        payload: [safeInput, x, y],
        word: originalWords[horizontalIndex]
      });
    }
  };

  return (
    <td className={className}>
      {renderWordIndex()}
      <input type={'text'} max={'1'} maxLength={'1'} value={inputLetter}
             onChange={(e) => updateLetter(e.target.value.toString())}/>
    </td>
  );
};
export default TablaCrucigramaTd;
