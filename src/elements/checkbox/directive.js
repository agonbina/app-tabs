
import tpl from './template.jade'

export default {
	restrict: 'E',
	require: '^ngModel',
	replace: true,
	scope: {
		checked: '=ngModel'
	},
	template: tpl,
	link: function($scope, $el, attrs, ngModel) {
		let $label = $el.find('label').eq(0)
		let $input = $el.find('input')[0]

		$label.text(attrs.label)

		if($scope.checked) {
			$el.addClass('checked')
			$input.setAttribute('checked', 'checked')
		}

		let toggle = () => $scope.$apply(() => {
			$scope.checked = !$scope.checked
			$input.checked = $scope.checked
			$el.toggleClass('checked')

			if($scope.checked) $input.setAttribute('checked', 'checked')
			else $input.removeAttribute('checked')
		})

		$el.on('click', toggle)

		// Clean up event handlers
		$scope.$on('destroy', function() {
			$el.off('click')
		})
	}
}