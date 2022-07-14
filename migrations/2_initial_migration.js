const Factory = artifacts.require("UniswapV2Factory");
const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let token1Address, token2Address
  await deployer.deploy(Token1);
  const token1 = await Token1.deployed();
  await deployer.deploy(Token2);
  const token2 = await Token2.deployed();
  token1Address = token1.address;
  token2Address = token2.address;

  await factory.createPair(token1Address, token2Address);
};
