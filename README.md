# app-tabs

### Architecture
The theme of this wizard app is a "user registering for an account using a multistep form".
It is using the ```Angular ui-router``` module to manage the state for each Step(i.e. tab) in the registration process.

### File organization
The source for the app is under ```/src```. Each folder has its own README which describes what it contains and the reasons as to why it has been setup the way it is.

* ```/app``` Contains app specific logic, specifically the ```main.js``` file loads global dependencies(ex. things like filters, controllers, services) which should be available anywhere in our app
* ```/elements``` Contains a set of directives for UI elements
* ```/filters``` Obviously this contains filter definitions(in this case there is only one, the 'capitalize' filter)
* ```/pages``` A page in this case is simply a Step. Each step has its own route as configured via ```angular-ui-router```, which in turn needs its own Controller and template. The templates are loaded via the Webpack build step, which dynamically translates each Jade template into an HTML string

### Future improvements
* Find a better way to define dependencies(ex. for a controller) because the current setup with a Class definition for a controller will not work when the outut bundle is minified.