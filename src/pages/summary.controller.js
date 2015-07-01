import PageController from './page.controller'

export default class SummaryController extends PageController {
	constructor($scope, $state, $storage) {
		$scope.title = "Summary"
		super($scope, $state)

		$scope.summary = {
			profile: $storage.profile || {},
			interests: $storage.interests || {},
			preferences: $storage.preferences || {}
		}

		$scope.profileIsComplete = this.profileIsComplete.bind($scope)
	}
	profileIsComplete() {
		let { profile: { name='', email='' } } = this.summary
		return name.length > 0 && email.length > 0
	}
}