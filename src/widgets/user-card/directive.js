
import Ctrl from './controller'
import tpl from './template.jade'

export default {
	restrict: 'E',
	replace: true,
	controller: ['$scope', Ctrl],
	scope: {
		profile: '=',
		preferences: '='
	},
	template: tpl,
	link: ($scope, $el, attrs) => {

	}
}