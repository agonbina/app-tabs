import PageController from './page.controller'

export default class SummaryController extends PageController {
	constructor($scope, $state) {
		super($scope, $state)
		$scope.title = "Summary"
	}
}