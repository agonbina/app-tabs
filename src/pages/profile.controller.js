import PageController from './page.controller'

export default class ProfileController extends PageController {
	constructor($scope, $state) {
		$scope.title = "Profile"
		super($scope, $state)
	}
}