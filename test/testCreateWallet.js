//put in new directory, run 'npm i bitcore-wallet-client-colx' and then execute with 'node'
var Client = require('bitcore-wallet-client-colx');
var BWS_INSTANCE_URL = 'http://colxexplorer.deltaengine.net:3232/bws/api'
var client = new Client({ baseUrl: BWS_INSTANCE_URL, verbose: false });
client.createWallet("MyWallet", "Me", 2, 2, {network: 'livenet'}, function(err, secret) {
  if (err) {
    console.log('error: ',err);
    return
  };
  // Handle err
  console.log('Wallet Created. Share this secret with your copayers: ' + secret);
});