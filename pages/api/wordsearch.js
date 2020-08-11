import wordsearch from "./../../functions/wordsearch";

const words = ['node','sergio','daniel', 'jahir', 'arge', 'fernada'];
const size = 12;

const getWordSearch = async (req, res) => {
    const wordsearchs = await wordsearch(words, size, size);
    return res.json(wordsearchs);
}


export default getWordSearch;