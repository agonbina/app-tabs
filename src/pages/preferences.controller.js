import PageController from './page.controller'

export default class PreferencesController extends PageController {
	constructor($scope, $state) {
		super($scope, $state)
		$scope.title = "Preferences"
	}
}