async function main() {
    const [deployer] = await ethers.getSigners();
    const BigNumber = require('bignumber.js');

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("Token");
    var decimalPlaces = 18;
    var amount = ethers.utils.parseUnits('1000000000.0', decimalPlaces);
    const token = await Token.deploy(amount);
    console.log("Token address:", token.address);
    console.log("Token balance:", (await token.balanceOf(deployer.address)).toString());
}
  
main().then(() => process.exit(0)).catch(error => {
      console.error(error);
      process.exit(1);
});