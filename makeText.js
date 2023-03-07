/** Command-line tool to generate Markov text.
 * node makeText
 */
const { MarkovMachine, getFileData } = require('./markov');

let mrkMch = new MarkovMachine(getFileData('eggs.txt'));
console.log(mrkMch.makeText(50))
