/** Textual markov chain generator */
const fs = require('fs');

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n^?!]+/);
    this.words = words.filter( c => c !== "" );
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let mChains = new Map();
    this.words.forEach( ( wrd, i, arr ) => {
      let nextWord = arr[i + 1] || null;
      ( mChains.has(wrd) ) ? mChains.get( wrd ).push( nextWord ) : mChains.set( wrd, [nextWord] );
    } );
    this.mChains = mChains;
  }


  /** return random text from chains */

  makeText( numWords = 100 ) {
    // extract keys from mChains to be used as an Array
    let extractedKeys = Array.from( this.mChains.keys() );
    // choose a random key from the extracted keys Array
    let key = extractedKeys[choice( extractedKeys.length )];

    // holds the markovSentence
    let markovChain = [];

    // break out of loop if the length of the chain exceeds length
    // or if the key is null
    while(markovChain.length < numWords && key != null) {
      markovChain.push(key);
      let nextKey = this.mChains.get( key );
      key = nextKey[choice( nextKey.length )]
    }
    return markovChain;
  }
}

const getFileData = ( file ) => fs.readFileSync( file, 'utf-8', ( err, data ) => ( err ) ? process.kill(1) : data );
const choice = ( num ) => Math.floor(Math.random() * num);

module.exports = { MarkovMachine, getFileData }