import './../styl/home.styl';
import template from './../templates/home.tmpl.html';

export const homeDirective = () => {
    return {
        template,
        scope: {},
        restrict: 'E',
        replace: true
    };
};
