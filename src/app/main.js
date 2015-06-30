
import pagesConfig from '../pages'
import capitalizeFilter from '../filters/capitalize'

let app = angular.module('app', ['ui.router'])

app.config(pagesConfig)
	.filter('capitalize', () => capitalizeFilter)

export default app