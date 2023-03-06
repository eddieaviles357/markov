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
    getFileData('eggs.txt');
    // TODO
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

const getFileData=(file)=>fs.readFileSync(file, 'utf-8', (err, data) => (err) ? process.kill(1) : data);

module.exports = { MarkovMachine, getFileData }