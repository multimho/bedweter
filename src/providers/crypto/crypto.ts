import { Injectable } from '@angular/core';
import  GpgCrypt  from 'openpgp';
//import Worker from 'openpgp/worker';
import 'rxjs/add/operator/map';

/*
Generated class for the CryptoProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CryptoProvider {
   openpgp: any;

  constructor() {
    console.log('Hello CryptoProvider Provider');
    this.openpgp = GpgCrypt;
    this.openpgp.initWorker({ path:'../assets/openpgp.worker.js'}) // set the relative web worker path
    //this.openpgp.initWorker({ path:'./lib/openpgp.worker.js' }) // set the relative web worker path

    //this.openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)

    // Generate new key pair

    var options = {
      userIds: [{ name:'Ad Thiers', email:'ad@datacomputing.nl' }], // multiple user IDs
      numBits: 4096,                                                // RSA key size
      passphrase: 'een heel geheim wachtwoord'                      // protects the private key
    };

    console.log("====== Generating new key pair ======");
    var keyPair = {
      key: "",
      privateKeyArmored: "",
      publicKeyArmored: ""
    }

    const poll = () => {
      console.log("Private key: " + keyPair.privateKeyArmored);    // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
      console.log("Public key:  " + keyPair.publicKeyArmored);     // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
    }

    this.openpgp.generateKey(options).then(function(key) {
      keyPair = key;
      console.log("====== Key pair generated ======");
      poll()
    });

    //setInterval(poll, 2000)
  };
}
