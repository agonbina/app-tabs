
export default class PageController {
	constructor($scope, $state) {
		var data = $state.current.data
		$scope.state = data.state
	}
}