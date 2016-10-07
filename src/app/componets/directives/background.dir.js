/**
 * Created by jbz on 8/29/2015.
 */
import template from './../templates/background.tmpl.html';
import angular from 'angular';
import 'ng-parallax/angular-parallax.min';
import 'angular-scroll/angular-scroll.min';

const backgroundDirective = (parallaxHelper) => {
    return {
        template,
        scope: {},
        restrict: 'E',
        replace: true,
        link: (scope, element, attr)=>{
            "use strict";
            scope.background = parallaxHelper.createAnimator(-0.6);

            $('.background').css('height', '880px');
            const bgimg = new Image();
            bgimg.onload = function () {
                $('.background').css('height', $('.background img'));
                $('.bg_shell').fadeIn(600, ()=> {
                    $('.overlay')
                        .css('transform', $('.background img').css('transform'))
                        .height($('.background img').height())
                        .fadeIn(2000);
                });
            };
            bgimg.src = 'http://i.imgur.com/XTcnTHm.jpg';
            $(window).resize(function () {
                $('.overlay').height($('.background img').height());
                $('.background').height($('.background img').height());
            });
        }
    };
};
backgroundDirective.$inject = ['parallaxHelper'];
export {backgroundDirective};