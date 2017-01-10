var fs = require('fs-extra');
var path = require('path');

module.exports = function (logger, platformsData, projectData, hookArgs) {
	var platform = hookArgs.platform.toLowerCase(),
		appResourcesDirectoryPath = projectData.appResourcesDirectoryPath,
		platformResourcesDirectory = path.join(appResourcesDirectoryPath, "iOS");

	return new Promise(function (resolve, reject) {
		if (platform == 'ios') {
			var target = path.join(platformResourcesDirectory, "build.xcconfig");

			try {
				fs.appendFileSync(target, "CODE_SIGN_ENTITLEMENTS = " + path.join(projectData.projectName, projectData.projectName + ".entitlements"));
			} catch (error) {
				reject();
			}
		}

		resolve();
	});
};
