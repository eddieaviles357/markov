/** Textual markov chain generator */
const fs = require('fs');

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

const getFileData = () => {
  const cb = (err, data) => (err) ? process.kill(1) : data;
  return fs.readFileSync('eggs.txt', 'utf-8', cb) 
}

module.exports = { MarkovMachine, getFileData }