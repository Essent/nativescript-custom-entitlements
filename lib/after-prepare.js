var fs = require('fs-promise');
var path = require('path');

module.exports = function (logger, platformsData, projectData, hookArgs) {
    var platform = hookArgs.platform.toLowerCase();

    if (platform == 'ios') {
        var appResourcesDirectoryPath = projectData.appResourcesDirectoryPath;
        var entitlementsFile = path.join(appResourcesDirectoryPath, 'iOS', 'app.entitlements');
        var projectRoot = path.join(projectData.platformsDir, 'ios');
        var project = path.join(projectRoot, projectData.projectName);
        var dest = path.join(project, projectData.projectName + '.entitlements');

        return fs.copy(entitlementsFile, dest)
            .then(function () {
                logger.out('Copied `' + entitlementsFile + '` to `' + dest + '`');
            });
    }

    logger.info('Only iOS');
    return Promise.resolve();
};
