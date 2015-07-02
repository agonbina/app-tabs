# app-tabs

### Architecture
The theme of this wizard app is a "user registering for an account using a multistep wizard".
It is using the ```Angular ui-router``` module to manage the state for each Step(i.e. tab) in the registration process and route. 
The step routes are as follows:

* ```/profile``` collects the user name and email. Validates the inputs
* ```/interests``` a simple dropdown(using the uiDropdown directive) to select a favorite Animal type, and then enter their name if they have one
* ```/preferences``` asks the user if they want to subscribe to a hypothetical newsletter and lets them choose the frequency
* ```/summary``` displays a card with the collected input, depending if its valid or not

### File organization
The source for the app is under ```/src```. Each folder has its own README which describes what it contains and the reasons as to why it has been setup the way it is.

* ```/app``` Contains app specific logic, specifically the ```main.js``` file loads global dependencies(ex. things like filters, controllers, services) which should be available anywhere in our app
* ```/elements``` Contains a set of directives for UI elements
* ```/filters``` Obviously this contains filter definitions(in this case there is only one, the 'capitalize' filter)
* ```/pages``` A page in this case is simply a Step. Each step has its own route as configured via ```angular-ui-router```, which in turn needs its own Controller and template. The templates are loaded via the Webpack build step, which dynamically translates each Jade template into an HTML string

### Code style
You may notice that I am not adding ```;```(semicolons), and the reason is because it is just a personal preference. Turns out they are not required(except in a few rare cases [read why](https://github.com/yyx990803/semi#but-semicolons-are-required)) but could be easily added via a build tool if every other developer in the team prefers to use them.
I'm also using ES6 syntax, which is compiled to ES5 using [babel](https://babeljs.io/) via the Webpack build step.

### Future improvements


### Other libraries used
Some of the angular libraries that I used for the project:

* ```angular-ui-router```[*](https://github.com/angular-ui/ui-router) used to manage the state on each step of the wizard
* ```angular-messages```[*](https://docs.angularjs.org/api/ngMessages) used to display validation messages
* ```ngStorage```[*](https://github.com/gsklee/ngStorage) used to store the collected data on each step to localStorage, so that we can restore it even on a full browser refresh
* ```ngFx```[*](https://github.com/Hendrixer/ngFx) really cool library that enables adding pleasant animations
* ```Semantic UI``` for the UI elements and views I used the new version of [Semantic, 2.0](http://semantic-ui.com/introduction/new.html)