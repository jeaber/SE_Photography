import template from './../templates/footer.tmpl.html';

const footerDirective = (utils) => {
    return {
        template,
        restrict: 'E',
        replace: true,
        scope:{},
        link: (scope, element, attr)=>{
            "use strict";
            scope.toTop = (element)=>{
                utils.toTop(element);
            };
           $('footer').hide().fadeIn(2000);
        }
    };
};
footerDirective.$inject = ['utils'];
export {footerDirective};