import PageController from './page.controller'

export default class PreferencesController extends PageController {
	constructor($scope) {
		super($scope)
		$scope.title = "Preferences"
	}
}