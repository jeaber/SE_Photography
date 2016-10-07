/**
 * Created by jeaber on 7/16/15.
 */
import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import {mainDirective} from './componets/directives/main.dir';
import {homeDirective} from './componets/directives/home.dir';
import {defaultDirective} from './componets/directives/default.dir';
import {contactDirective} from './componets/directives/contact.dir';
import {collectionDirective} from './componets/directives/collection.dir';
import {footerDirective} from './componets/directives/footer.dir';
import {backgroundDirective} from './componets/directives/background.dir';
import {datePickerDirective} from './componets/directives/datePicker.dir';

import {shared} from './componets/services/shared.service';

export const app = angular.module('photography', [
    'ui.router',
    'ngAnimate',
    'duParallax',
    shared.name
])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    abstract: true,
                    template: '<home></home>'
                })
                .state('home.default', {
                    url: '/',
                    template: '<default></default>'
                })
                .state('home.contact', {
                    url: '/contact',
                    template: '<contact></contact><default></default>'
                })
                .state('home.collection', {
                    url: '/collection',
                    template: '<collection></collection>'
                });
        }])
    .directive('main', mainDirective)
    .directive('home', homeDirective)
    .directive('default', defaultDirective)
    .directive('contact', contactDirective)
    .directive('collection', collectionDirective)
    .directive('footer2', footerDirective)
    .directive('datePicker', datePickerDirective)
    .directive('background', backgroundDirective);