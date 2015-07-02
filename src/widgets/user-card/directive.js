
import tpl from './template.jade'

export default {
	restrict: 'E',
	replace: true,
	scope: {
		profile: '=',
		preferences: '=',
		interests: '='
	},
	template: tpl,
	link: ($scope, $el, attrs) => {

	}
}