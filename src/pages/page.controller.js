
export default class PageController {
	constructor($scope, $state) {
		$scope.state = $state.current.data.state
	}
}