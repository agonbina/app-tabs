import PageController from './page.controller'

export default class PreferencesController extends PageController {
	constructor($scope, $state, $storage) {
		$scope.title = "Preferences"
		$scope.preferences = $storage.preferences || {
			isSubscribed: true,
			frequency: 'weekly'
		}

		super($scope, $state)

		$scope.$watch('preferences', preferences => $storage.preferences = preferences, true)
	}
}