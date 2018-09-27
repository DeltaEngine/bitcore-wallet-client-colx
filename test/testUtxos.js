//put in new directory, run 'npm i bitcore-wallet-client-colx' and then execute with 'node'
var Client = require('bitcore-wallet-client-colx');
var BWS_INSTANCE_URL = 'http://colxexplorer.deltaengine.net:3232/bws/api'
var client = new Client({ baseUrl: BWS_INSTANCE_URL, verbose: false });
client.joinWallet("Lt7FaFg8oFnF5hGCXCGuyBYQtk9yUGq5UetAdm6Xj66SJMhxR4QuBv9wq3zCWeMoFqcHNV6r7dL", "Bla", {}, function(err, wallet) {
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

      client.getUtxos({
        addresses: addr,
      }, function(err, utxos) {
        if (err) return cb(err);
        return cb(null, _.sumBy(utxos, 'satoshis'));
      });
      
      console.log('Checking: DLCXL7J6zuQ5s64CbAu4L2ATkzHnTSqrKN');
      //https://chainz.cryptoid.info/colx/address.dws?DLCXL7J6zuQ5s64CbAu4L2ATkzHnTSqrKN.htm
      client.getUtxos({
        addresses: "DLCXL7J6zuQ5s64CbAu4L2ATkzHnTSqrKN",
      }, function(err, utxos) {
        if (err) return cb(err);
        return cb(null, _.sumBy(utxos, 'satoshis'));
      });
    });
  });
});
client.createWallet("MyWallet", "Me", 2, 2, {network: 'livenet'}, function(err, secret) {
  if (err) {
    console.log('error: ',err);
    return
  };
  // Handle err
  console.log('Wallet Created. Share this secret with your copayers: ' + secret);
});