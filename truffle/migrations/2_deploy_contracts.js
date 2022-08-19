var Lottery = artifacts.require("./Lottery.sol");

module.exports = async function(deployer) {
    await deployer.deploy(Lottery, 50);
}