'use strict'
const IPFS = require('ipfs')
const chai = require('chai')
const Readable = require('readable-stream')
const expect = chai.expect
const hashh = ""
const interval = 2000
var ipfs = ""
const openDatabase = () => {
		ipfs = new IPFS({
			init: true,
			start: true,
			EXPERIMENTAL: {
				pubsub: true,
				sharding: true,
			}
		})
	function handleError(e) {
		console.error(e.stack)
			elm.innerHTML = e.message  
	}
	ipfs.on('error', (e) => handleError(e))
		ipfs.on('ready', () => {
				var kamers = {}
			kamers.bed = {}
			kamers.bed.prive = true;
			kamers.bed.locatie = "hc.2.35";
			kamers.bed.beschikbaar = true;
			kamers.bed.type = "foobar";
			var json_kamer = JSON.stringify(kamers);
			const buffered = new Buffer(json_kamer)
				const rs = new Readable()
				rs.push(buffered)
				rs.push(null)
				const arr = []
				const filePair = {
					path: 'data.txt',
					content: rs
				}
			arr.push(filePair)

				ipfs.files.add(arr, (err, res) => {
					expect(err).to.not.exist()
						expect(res).to.have.length(1)
						const file = res[0]
						hashh = file.hash
						expect(file.path).ti.equal(file.hash)
						console.log("Just stored: " + file.hash)
				})
			const query = () => {
			}
			db.load(10)
				.then(() => {
					setInterval(query, interval)
				})
		})
}
const getData = () => {
		ipfs.files.cat(hashh, (err, stream) => {
			expect(err).to.not.exist()
				stream.pipe(bl((err, data) => {
					expect(err).to.not.exist()
						expect(data).to.deep.equal(bigFile)
				}))
		})
}

openDatabase();
getData();
