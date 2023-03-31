require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.18',
	networks: {
		goerli: {
			chainId: 5,
			url: 'https://goerli.infura.io/v3/309820d3955640ec9cda472d998479ef',
			accounts: [process.env.RINKEBY_PRIVATE_KEY],
		},
	},
}
