/**
 * System configuration for Angular 
 */
(function (global) {
	System.config({
		paths: {
			// paths serve as alias
			'npm:': global.serverSideSettings.appPath + '/AdminSite/node_modules/'
		},
		
		map: {
			// our app is within the app folder
			app: global.serverSideSettings.appPath + '/AdminSite/Scripts/app',

			// angular bundles
			'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
			'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
			'@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
			'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
			'rxjs': 'npm:rxjs',
			// other libraries
			"class-transformer": "npm:class-transformer",
			"ng2-file-upload": "npm:ng2-file-upload",
			"ng2-pagination": "npm:ng2-pagination"
		},
		
		packages: {
			app: {
				main: './main.js',
				defaultExtension: 'js'
			},
			rxjs: {
				defaultExtension: 'js'
			},
			'angular-in-memory-web-api': {
				main: './index.js',
				defaultExtension: 'js'
			},
			'class-transformer': {
				"main": "index.js",
				"defaultExtension": "js"
			},
			'ng2-file-upload': {
				"main": "index.js",
				"defaultExtension": "js"
			},
			'ng2-pagination': {
				"main": "index.js",
				"defaultExtension": "js"
			}
		}
	});
})(this);
