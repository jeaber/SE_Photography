/**
 * Created by jbz on 8/27/2015.
 */
import angular from 'angular';
import 'jquery';
import '../plugins/jquery-scrollto';
import '../plugins/jquery-easing';

export const shared = angular.module('shared',[])
    .factory('utils', () => {
        const utils = {};
        utils.toTop = (element) => {
            "use strict";
            console.log('scrolltotop');
            $(element).ScrollTo({
                duration: 2000,
                easing: 'easeOutExpo'
            });
        }
        return utils;
    });