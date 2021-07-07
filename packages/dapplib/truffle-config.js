require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet random nominee concert include industry fresh giant'; 
let testAccounts = [
"0x5a9309056d26d7fe7046bebccb3f4f78b22425127b6a36855bf8c9c1089afc96",
"0x59102c67292bdc1aa67a855bf45879d3654443d64cecdbea0263c50f2cce2484",
"0xd8fbf112493eb6651b700a186afa0fd87be3797e601d3314a8401996c460b9c5",
"0x65da8cf51bb9c58125fb61c739ce23a6bb86e3672d552b76cbf9b60f620fbfaa",
"0xf015e90ff65df526eeef5c5a66899f7ce1f77ad76ca2aa8fa2bc25c454cdf9f1",
"0xcdd47ed7cd89041591acb2ac2ab08c35313f65e269c972f99deb6dbb48ac53c4",
"0x74b0b84176cfb2af12233dd45d145777b0ea5a6dad39a74600e1a30afe5b3bca",
"0x9ac4e6f9f6b1e886c1e4188e91616c3c2dc29bcb9c329c96bc88247414cbba43",
"0x6dd5a113f40a85c4157464b397fc9922f5990160c41061410240dc9a71227843",
"0xf28d691719f8f9b80e57d535675acbf5fd08a60f96f88aec4d54fe3d8134c0ae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

