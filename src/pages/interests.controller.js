import PageController from './page.controller'

export default class InterestsController extends PageController {
	constructor($scope, $state) {
		$scope.title = "Interests"
		super($scope, $state)
	}
}