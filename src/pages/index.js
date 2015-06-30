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
				title: 'Profile'
			},
			controller: ProfileController,
			template: profileTpl
		},
		'interests': {
			url: '/interests',
			data: {
				title: 'Interests'
			},
			controller: InterestsController,
			template: interestsTpl
		},
		'preferences': {
			url: '/preferences',
			data: {
				title: 'Preferences'
			},
			controller: PreferencesController,
			template: preferencesTpl
		},
		'summary': {
			url: '/summary',
			data: {
				title: 'Summary'
			},
			controller: SummaryController,
			template: summaryTpl
		}
	}

	Object.keys(states).forEach(name => {
		$stateProvider.state(name, states[name])
	})
}