const NFT721 = artifacts.require("NFT721");
const NFT1155 = artifacts.require("NFT1155");

module.exports = function (deployer) {
  //deployer.deploy(NFT721);
  deployer.deploy(NFT1155);
};
