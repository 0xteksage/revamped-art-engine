const basePath = process.cwd();
const { startGeneration, buildSetup } = require(`${basePath}/src/solBuildNS.js`);

(() => {
  buildSetup();
  startGeneration();
})();
