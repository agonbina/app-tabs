
import pagesConfig from '../pages'
import { capitalizeFilter } from '../filters'
import { uiCheckbox, uiDropdown } from '../elements'
import { userCard } from '../widgets'

let app = angular.module('app', [
	'ngAnimate',
	'ngMessages',
	'ngFx',
	'ui.router', 
	'ngStorage'
])

/**
* Mount global configurations and filters
*/ 

app.config(pagesConfig)
	.filter('capitalize', () => capitalizeFilter)

/**
* Mount UI elements, widgets and controllers
*/

app.directive('uiCheckbox', uiCheckbox)
	.directive('uiDropdown', uiDropdown)
	.directive('userCard', userCard)

export default app