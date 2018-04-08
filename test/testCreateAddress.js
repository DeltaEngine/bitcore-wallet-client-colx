//put in new directory, run 'npm i bitcore-wallet-client-colx' and then execute with 'node'
var Client = require('bitcore-wallet-client-colx');
var BWS_INSTANCE_URL = 'http://localhost:3232/bws/api'
var client = new Client({ baseUrl: BWS_INSTANCE_URL, verbose: false });
client.joinWallet("//use output from testCreateWallet.js here", "Bla", {}, function(err, wallet) {
  if (err) {
    console.log('joinWallet error: ', err);
    return
  };
  console.log('Joined ' + wallet.name + '!');
  client.openWallet(function(err, ret) {
    if (err) {
      console.log('openWallet error: ', err);
      return
    };
    console.log('\n\n** Wallet Info', ret);
    client.createAddress({}, function(err,addr){
      if (err) {
        console.log('createAddress error: ', err);
        return;
      };
      console.log('Address created: ', addr);
    });
  });
});