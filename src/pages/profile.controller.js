import PageController from './page.controller'

export default class ProfileController extends PageController {
	constructor($scope) {
		super($scope)
		$scope.title = "Profile"
	}
}