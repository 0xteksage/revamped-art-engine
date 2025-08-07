const basePath = process.cwd();
const { startGeneration, buildSetup } = require(`${basePath}/src/solBuildAR.js`);

(() => {
  buildSetup();
  startGeneration();
})();
