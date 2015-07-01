import ProfileController from './profile.controller'
import InterestsController from './interests.controller'
import PreferencesController from './preferences.controller'
import SummaryController from './summary.controller'
import profileTpl from './templates/profile.jade'
import interestsTpl from './templates/interests.jade'
import preferencesTpl from './templates/preferences.jade'
import summaryTpl from './templates/summary.jade'


export default function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/profile')

	let animationSettings = {
		enter: 'slide-in-right-fade',
		leave: 'slide-out-left-fade',
		ease: 'sine',
		speed: 500
	}
	let states = {
		'profile': {
			url: '/profile',
			data: {
				state: {
					next: 'interests'
				},
				formName: 'profile'
			},
			controller: ['$scope', '$state', '$localStorage', '$timeout', ProfileController],
			template: profileTpl,
		    animation: animationSettings
		},
		'interests': {
			url: '/interests',
			data: {
				state: {
					prev: 'profile',
					next: 'preferences'
				}
			},
			controller: ['$scope', '$state', InterestsController],
			template: interestsTpl,
		    animation: animationSettings
		},
		'preferences': {
			url: '/preferences',
			data: {
				state: {
					prev: 'interests',
					next: 'summary'
				}
			},
			controller: ['$scope', '$state', '$localStorage', PreferencesController],
			template: preferencesTpl,
		    animation: animationSettings
		},
		'summary': {
			url: '/summary',
			data: {
				state: {
					prev: 'preferences'
				}
			},
			controller: ['$scope', '$state', '$localStorage', SummaryController],
			template: summaryTpl,
		    animation: animationSettings
		}
	}

	Object.keys(states).forEach(name => {
		$stateProvider.state(name, states[name])
	})
}