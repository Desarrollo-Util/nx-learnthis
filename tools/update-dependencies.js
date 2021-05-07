const ncu = require('npm-check-updates');

const path = require('path');

(async () => {
	const upgraded = await ncu.run({
		packageFile: path.join(
			__dirname,
			'../packages/nx/src/constants/dependencies/dependencies.json'
		),
		upgrade: true,
	});

	console.log(upgraded); // { "mypackage": "^2.0.0", ... }
})();
