import PageController from './page.controller'

export default class ProfileController extends PageController {
	constructor($scope, $state, $storage, $timeout) {
		$scope.title = "Profile"
		super($scope, $state)

		// Restore the Profile data from localStorage and update it when there is changes
		$scope.profile = $storage.profile || {}
		$timeout(() => {
			$scope.form.name.$setTouched(true)
			$scope.form.email.$setTouched(true)
		}, 100)

		$scope.$watch('profile', profile => $storage.profile = profile, true)


		// Bind the Class methods to $scope
		$scope.showErrors = this.showErrors.bind($scope)
	}
	showErrors() {
		let form = this.form
		return (form.name.$touched || form.email.$touched) && form.$invalid
	}
}