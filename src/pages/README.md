
### index.js
Exports a configuration function, which in turn configures the routes for the "user registration" wizard(i.e. tabs).

### page.controller.js
Exports a Class(compiled to a function in ES5) which is extended by every other Controller of a page(Profile, Interests, Preferences, Summary). This helps to set common functionality accross every page.

### {profile, interests, preferences, summary}.controller.js
Each one of them exports a Class(i.e. a Controller function) which defines the behavior of the corresponding page.