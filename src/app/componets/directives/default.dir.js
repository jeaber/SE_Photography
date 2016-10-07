import './../styl/default.styl';
import template from './../templates/default.tmpl.html';

const defaultDirective = () => {
    return {
        template,
        scope: {},
        restrict: 'E',
        replace: true,
        link: (scope, element, attr, ctrl)=> {
            "use strict";
            $("a.group1").fancybox({
                'transitionIn': 'fade',
                'transitionOut': 'fade',
                'speedIn': 800,
                'speedOut': 200,
                'overlayShow': false,
                'padding': 0
            });
        }
    }
};
defaultDirective.$inject = [];
export {defaultDirective};