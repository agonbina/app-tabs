
export default class PageController {
	constructor($scope, $state) {
		let { state={} } = $state.current.data

		$scope.state = state
	}
}
