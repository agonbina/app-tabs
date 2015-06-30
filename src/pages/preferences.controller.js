import PageController from './page.controller'

export default class PreferencesController extends PageController {
	constructor($scope, $state) {
		$scope.title = "Preferences"
		$scope.isSubscribed = true

		super($scope, $state)

		$scope.increment = this.increment.bind($scope)
	}
	increment() {
		//this.$storage.preferences.counter += 1
	}
}