import PageController from './page.controller'

export default class InterestsController extends PageController {
	constructor($scope, $state) {
		$scope.title = "Interests"
		$scope.animalTypes = [{
			value: 'cat',
			label: 'Cat'
		}, {
			value: 'dog',
			label: 'Dog'
		}]
		$scope.favorite = ''
		super($scope, $state)
	}
}