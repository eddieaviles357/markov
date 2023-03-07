/** Command-line tool to generate Markov text.
 * node makeText
 */
const { MarkovMachine, getFileData } = require('./markov');


if(process.argv[2] === 'file') {
    let mrkMch = new MarkovMachine( getFileData( process.argv[3] ) );
    console.log( mrkMch.makeText() );
}
