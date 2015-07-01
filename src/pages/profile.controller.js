import PageController from './page.controller'

export default class ProfileController extends PageController {
	constructor($scope, $state, $timeout) {
		let { formName } = $state.current.data
		$scope.title = "Profile"

		$scope.showErrors = function() {
			let form = $scope.form
			return form.name.$touched && form.email.$touched && form.$invalid
		}

		$timeout(()=>{
			window.$form = $scope.form
		})
		super($scope, $state)
	}
}