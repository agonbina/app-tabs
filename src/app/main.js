
import pagesConfig from '../pages'
import capitalizeFilter from '../filters/capitalize'
import uiCheckbox from '../elements/checkbox'

let app = angular.module('app', ['ui.router', 'ngStorage'])

/**
* Mount global configurations and filters
*/ 

app.config(pagesConfig)
	.filter('capitalize', () => capitalizeFilter)

/**
* Mount UI directives and controllers
*/

app.directive('uiCheckbox', uiCheckbox)

export default app