/**
 * Created by jbz on 8/30/2015.
 */
import './../styl/main.styl';
import template from './../templates/main.tmpl.html';

const mainDirective = ($timeout) => {
    return {
        template,
        scope: {},
        restrict: 'E',
        replace: true,
        link: (scope, element, attr, ctrl)=>{
            "use strict";
            scope.$watch(() => {
                    return $('.home > [ui-view]').height();
                }, styleChangedCallBack,
                true);

            function styleChangedCallBack(newValue, oldValue) {
                if (newValue !== oldValue) {
                    $('.home').height(newValue + $('.home > .row').height());
                    $('.main').height(newValue + $('.home > .row').height());
                }
            }

            $timeout(()=> {
                scope.ngFadeInHack = true;
            });
        }
    };
};
mainDirective.$inject = ['$timeout'];
export {mainDirective};