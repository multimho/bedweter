import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import IPFS from 'ipfs';
/*
Generated class for the DistoreProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
/*
Wat komt er uit de 3 lockers?
locker 1 : transferverpleegkundige
locker 2 : beddenplek 1
locker 3 : beddenplek 2
Wat is een beddenplek -> hash en key pair
*/
@Injectable()
export class DistoreProvider {
//export class DistoreProvider implements StorageInterface {
  node: any;

  constructor() {
    console.log('Hello DistoreProvider Provider');

    this.node = new IPFS({
      repo: String(Math.random() + Date.now()),
      //repo: "ilogos", //String(Math.random() + Date.now())
      start: true,
      init: true,
      EXPERIMENTAL: { // enable experimental features
        pubsub: true
      },
      config: {
        "Addresses": {
          "Swarm": [
            "/ip4/127.0.0.1/tcp/4001",
            "/ip4/0.0.0.0/tcp/4001",
            "/libp2p-webrtc-star/dns4/star-signal.cloud.ipfs.team/wss"
          ],
          "API": "",
          "Gateway": ""
        },
        "Discovery": {
          "MDNS": {
            "Enabled": true,
            "Interval": 10
          },
          "webRTCStar": {
            "Enabled": true
          }
        },
        "Bootstrap": [
          "/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
          "/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx",
          "/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3",
          "/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z",
          "/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
          "/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
          "/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm",
          "/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64"
        ]
      }
    });

    this.node.on('ready', () => {
      console.log('IPFS node is ready');
      console.log(this.node.config.get().then(function(result){
        console.log(result.Addresses)
        console.log(result.Bootstrap);
      }));
    });
  }// end of constructor

  save_data(){
    var toStore = "jeeh it works"
    //document.getElementById('source').value
    //var toStore = createData()

    this.node.files.add(Buffer.from(toStore), (err, res) => {
        if (err || !res) {
            return console.error('ipfs add error', err, res)
        };

        res.forEach((file) => {
            if (file && file.hash) {
              // this should become a UI event
            //    document.getElementById('hash').innerText = file.hash;
                console.log('successfully stored', file.hash);
        //        display(file.hash);
            }
        })
    })
  }
  public getBeds(){return []};
  public getBedPlaces(){return []};
  public getNextID(){return 0};
}
