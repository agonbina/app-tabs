import PageController from './page.controller'

export default class SummaryController extends PageController {
	constructor($scope) {
		super($scope)
		$scope.title = "Summary"
	}
}