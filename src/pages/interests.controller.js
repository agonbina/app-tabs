import PageController from './page.controller'

export default class InterestsController extends PageController {
	constructor($scope, $state, $storage) {
		$scope.title = "Interests"
		$scope.animalTypes = [{
			value: 'cat',
			label: 'Cat'
		}, {
			value: 'dog',
			label: 'Dog'
		}, {
			value: 'fish',
			label: 'Fish'
		}]
		$scope.interests = $storage.interests || {
			favorite: '',
			petName: ''
		}
		$scope.hasFavorite = () => {
			let favorite = $scope.interests.favorite
			return favorite && favorite !== ''
		}
		super($scope, $state)

		$scope.$watch('interests', interests => $storage.interests = interests)
	}
}