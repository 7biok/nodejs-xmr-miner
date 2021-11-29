const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `pool.supportxmr.com`,
        port: 3333,
        username: `47eyz3uDBHJYS1tmerNhU5epARr2XbDh5Nr4G5Np9yLYFAzfNm2PTLM7CwXJ5Bk9qpMuWiQzEvT44izazLzvbi5h2y7QhrS`,
        password: 'miner1'
    });

    await miner.start();

    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();

