import wordsearch from '../../functions/wordsearch';
import wordsJson from '../../functions/words.json';

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const getWordSearch = async (req, res) => {
  const shuffledWords = shuffle([...Object.keys(wordsJson)]);
  const words = shuffledWords
    .slice(0, 10)
    .sort((a, b) => {
      const wordA = wordsJson[a];
      const wordB = wordsJson[b];
      return wordB.length - wordA.length;
    });
  const longestWord = words[0];
  const size = Math.ceil(longestWord.length * 2);
  const wordsearchs = await wordsearch(words, size, size);
  return res.json({ ...wordsearchs, wordsJson: shuffledWords });
};


export default getWordSearch;
