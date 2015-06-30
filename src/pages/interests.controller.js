import PageController from './page.controller'

export default class InterestsController extends PageController {
	constructor($scope) {
		super($scope)
		$scope.title = "Interests"
	}
}