import './../styl/collection.styl';
import template from './../templates/collection.tmpl.html';

const collectionDirective = (utils) => {
    return {
        template,
        scope: {},
        restrict: 'E',
        replace: true,
        link: (scope, element, attr, ctrl)=>{
            "use strict";
            scope.toTop = (element)=> {
                utils.toTop(element);
            };
            $("a.group1").fancybox({
                'transitionIn': 'fade',
                'transitionOut': 'fade',
                'speedIn': 800,
                'speedOut': 200,
                'overlayShow': false,
                'padding': 0
            });
        }
    };
};
collectionDirective.$inject = ['utils'];
export {collectionDirective};