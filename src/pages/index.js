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

	let states = {
		'profile': {
			url: '/profile',
			data: {
				state: {
					next: 'interests'
				}
			},
			controller: ['$scope', '$state', ProfileController],
			template: profileTpl,
		    animation: {
		    	enter: 'slide-in-right-fade',
		    	leave: 'slide-out-left-fade',
		    	ease: 'sine',
		    	speed: 500
		    }
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
		    animation: {
		    	enter: 'slide-in-right-fade',
		    	leave: 'slide-out-left-fade',
		    	ease: 'sine',
		    	speed: 500
		    }
		},
		'preferences': {
			url: '/preferences',
			data: {
				state: {
					prev: 'interests',
					next: 'summary'
				}
			},
			controller: ['$scope', '$state', PreferencesController],
			template: preferencesTpl,
		    animation: {
		    	enter: 'slide-in-right-fade',
		    	leave: 'slide-out-left-fade',
		    	ease: 'sine',
		    	speed: 500
		    }
		},
		'summary': {
			url: '/summary',
			data: {
				state: {
					prev: 'preferences'
				}
			},
			controller: ['$scope', '$state', SummaryController],
			template: summaryTpl,
		    animation: {
		    	enter: 'slide-in-right-fade',
		    	leave: 'slide-out-left-fade',
		    	ease: 'sine',
		    	speed: 500
		    }
		}
	}

	Object.keys(states).forEach(name => {
		$stateProvider.state(name, states[name])
	})
}