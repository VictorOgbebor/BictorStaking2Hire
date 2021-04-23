const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);

  const contractFiles = fs.readdirSync("./build/contracts");
  contractFiles.forEach(contractFile => {
    const fullPath = `./build/contracts/${contractFile}`;
    const stdout = child_process.execSync(
      `jq '. | del(.ast, .legacyAST)' ${fullPath}`
    );
    fs.writeFileSync(fullPath, stdout);
  });
  console.log("--- Deleted ASTs");
};
