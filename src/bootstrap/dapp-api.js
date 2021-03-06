import Eth from 'ethjs'
import Web3 from 'web3'

const env = process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV'
const ETHEREUM_PROVIDER = process.env[`REACT_APP_${env}_ETHEREUM_PROVIDER`]
const IPFS_URL = process.env[`REACT_APP_${env}_IPFS_URL`]
const S3_URL = process.env[`REACT_APP_${env}_S3_URL`]
const T2CR_URL = process.env[`REACT_APP_${env}_T2CR_URL`]

let eth
if (process.env.NODE_ENV === 'test')
  eth = new Eth(require('ganache-cli').provider())
else if (window.ethereum) eth = new Eth(window.ethereum)
else if (window.web3 && window.web3.currentProvider)
  eth = new Eth(window.web3.currentProvider)
else eth = new Eth(new Eth.HttpProvider(ETHEREUM_PROVIDER))

const web3 = new Web3('http://localhost:8545')

export { eth, IPFS_URL, S3_URL, T2CR_URL, web3 }
