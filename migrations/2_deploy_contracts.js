const SampleStoreage = artifacts.require("SampleStoreage");

module.exports = function(deployer) {
  deployer.deploy(SampleStoreage);
};
