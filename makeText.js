/** Command-line tool to generate Markov text.
 * node makeText
 */
const { MarkovMachine, getFileData } = require('./markov');
const axios = require('axios');

const getAxiosData = async () => {
    try {
        let {data} = await axios.get(process.argv[3]);
        console.log(typeof data)
        return data;
    } catch (error) {
        console.log('Failed to get data');
        process.kill(2);
    }
}

let data = '';
const init = async () => {
    if(process.argv[2] === 'file') {
        data = getFileData( process.argv[3] );
    } else if(process.argv[2] === 'url') {
        data = await getAxiosData();
    }
    let mrkMch = new MarkovMachine( data );
    console.log( mrkMch.makeText() );
}

init();