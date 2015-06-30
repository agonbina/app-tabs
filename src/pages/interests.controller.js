import PageController from './page.controller'

export default class InterestsController extends PageController {
	constructor($scope, $state) {
		super($scope, $state)
		$scope.title = "Interests"
	}
}