
import pagesConfig from '../pages'

let app = angular.module('app', ['ui.router'])

app.config(pagesConfig)

export default app