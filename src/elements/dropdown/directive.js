
import tpl from './template.jade'
import 'core-js/fn/array/find'

export default {
	restrict: 'E',
	require: '^ngModel',
	replace: true,
	scope: {
		options: '=',
		label: '@'
	},
	template: tpl,
	controller: function($scope) {
		$scope.isOpen = false
		$scope.selectItem = $i => $scope.selected = $scope.options[$i]
	},
	link: function($scope, $el, attrs, ctrl) {
		let $menu = $el[0].querySelector('.menu')
		let findOption = value => $scope.options.find(option => option.value === value)
		
		ctrl.$render = () => {
			let value = ctrl.$viewValue
			if(value && value !== '') $scope.selected = findOption(value)
		}

		$scope.$watch('isOpen', isOpen => {
			if(isOpen) $menu.setAttribute('style', 'display: block !important')
			else $menu.removeAttribute('style')
		})
		$scope.$watch('selected', (option={}) => {
			$scope.isOpen = false
			ctrl.$setViewValue(option.value)
		})
	}
}