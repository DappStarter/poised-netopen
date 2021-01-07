require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rescue noise mistake idea clock metal gas'; 
let testAccounts = [
"0x59a13513d7331d1b856583d2bbb97909f742b5905d9187f8b2f25f8b418361da",
"0x2d47483d66aef14f04a336b1c0ea3dd2cad69f9dcede08264976688da4f02008",
"0xb6b796449909e1b478697fb72d64a76450031cce437f9ca0c181805bbb6b0a15",
"0xea0853cf445e5fda56af83b2efea6ae94fb5d622627426917933bde9f7ea3287",
"0x0e9add498b0fe2909cf9b9fc1c43a39d014cc155c359a600a2a2091fe7877590",
"0x1ab19c5c72bfda94046539531b0ee6ee7f82bdeeaa61b03db054af715fc83951",
"0x5ed70c77f2e6b2646d25d1b6e1118a408415fef841acb8f20ddf7f686202c48c",
"0xe40d773b0f4207dcd68b378671c803bc55bfd97f6d044e79446af7e0f65a8579",
"0x6e6bcd26cf375c9c58b1ee38016995cfabf4d1cf6e7c5559ff5d77c447de5906",
"0x8227f814d5eca762f4b23a13b448d797587c27d7e854973a488ecd55be598b9f"
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
            version: '^0.5.11'
        }
    }
};
