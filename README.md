### Demo
You can see the app running at [escenic-challenge.bitballoon.com](http://escenic-challenge.bitballoon.com/)

### Architecture
The theme of this wizard app is a "user registering for an account using a multistep wizard".
It is using the ```Angular ui-router``` module to manage the state for each Step(i.e. tab) in the registration process and route. 
The step routes are as follows:

* ```/profile``` collects the user name and email. Validates the inputs
* ```/interests``` a simple dropdown(using the uiDropdown directive) to select a favorite Animal type, and then enter their name if they have one
* ```/preferences``` asks the user if they want to subscribe to a hypothetical newsletter and lets them choose the frequency
* ```/summary``` displays a card with the collected input, depending if its valid or not


### File organization
The source for the app is under ```/src```. Some folders have its own README which describes what it contains and the reasons why it has been setup the way it is.

* ```/app``` contains app specific logic, specifically the ```main.js``` file loads global dependencies(ex. things like filters, controllers, services) which should be available anywhere in our app
* ```/elements``` contains a set of directives for UI elements
* ```/widgets``` contains more complex, app specific, reusable widgets(component directives)
* ```/filters``` contains filter definitions(in this case there is only one, the 'capitalize' filter)
* ```/pages``` a page in this case is simply a Step. Each step has its own route as configured via ```angular-ui-router```, which in turn needs its own Controller and template. The templates are loaded via the Webpack build step, which dynamically translates each Jade template into an HTML string


### Code style
You may notice that I am not adding ```;```(semicolons), and the reason is because it is just a personal preference. Turns out they are not required(except in a few rare cases [read why](https://github.com/yyx990803/semi#but-semicolons-are-required)) but could be easily added via a build tool if every other developer in the team prefers to use them.
I'm also using ES6 syntax, which is compiled to ES5 using [babel](https://babeljs.io/) via the Webpack build step.


### Contributing(ie developing locally)
You must have [Node](https://nodejs.org/) and NPM installed in your dev environment.
I used Bower to manage the front end dependencies(ie. Angular and the extensions) and NPM to manage the dev dependencies for Webpack.

To develop and/or run the app locally, do this:
Open a terminal and install Webpack, Bower and http-server globally: ```npm install -g webpack bower http-server```

Then:

* Clone this repository: ```git clone https://github.com/agonbina/app-tabs.git```
* cd into it: ```cd app-tabs```
* Install all the dependencies: ```npm install``` and ```bower install```
* Build the application by running: ```webpack```
* Finally run the http-server: ```http-server --cors -o```


### Other libraries used
Some of the angular libraries that I used for the project:

* ```angular-ui-router```[*](https://github.com/angular-ui/ui-router) used to manage the state on each step of the wizard
* ```angular-messages```[*](https://docs.angularjs.org/api/ngMessages) used to display validation messages
* ```ngStorage```[*](https://github.com/gsklee/ngStorage) used to store the collected data on each step to localStorage, so that we can restore it even on a full browser refresh
* ```ngFx```[*](https://github.com/Hendrixer/ngFx) really cool library that enables adding pleasant animations
* ```Semantic UI``` for the UI elements and views I used the new version of [Semantic, 2.0](http://semantic-ui.com/introduction/new.html)