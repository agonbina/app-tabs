import PageController from './page.controller'

export default class ProfileController extends PageController {
	constructor($scope, $state, $timeout) {
		$scope.title = "Profile"
		super($scope, $state)
		let { formName } = $state.current.data

		$scope.$watch('profile', profile => {
			console.log(profile)
		}, true)
	}
}