import PageController from './page.controller'

export default class SummaryController extends PageController {
	constructor($scope, $state) {
		$scope.title = "Summary"
		super($scope, $state)
	}
}