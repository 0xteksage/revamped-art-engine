const basePath = process.cwd();
const { existsSync, removeSync, emptyDirSync } = require('fs-extra');
const tempFolder = `${basePath}/.temp`;
const buildFolder = `${basePath}/build/`;

(() => {
    if (existsSync(tempFolder)) {
        removeSync(tempFolder, (err) => { 
            if (err) throw err;
            console.log('[status]: Temporary folder successfully deleted.');
        });
    } else {
        console.log('[status]: Temporary folder does not exist.');
    }

    if (existsSync(buildFolder)) {
        emptyDirSync(buildFolder);
        console.log('[status]: Build folder contents successfully deleted.');
    } else {
        console.log('[status]: Build folder does not exist.');
    }

    console.log('[message]: You are now ready to generate and build a new NFT collection. Run "yarn build" to proceed.');
})();
