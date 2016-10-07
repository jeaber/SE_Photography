import './../styl/contact.styl';
import template from './../templates/contact.tmpl.html';
import io from 'socket.io-client';

const socket = io();
export const contactDirective = ($filter, $timeout) => {
    return {
        template,
        scope: {},
        restrict: 'E',
        replace: true,
        link: (scope, element, attr, ctrl)=> {
            scope.availability = '(For availability)';
            scope.subject = 'Photography Inquiry';
            socket.emit('refreshEventlist');
            $timeout(()=> {
                "use strict";
                scope.$watch('date', (date) => {
                    console.log('$watch date triggered: '+date);
                    scope.dateChecker();
                    $('.datepicker').value = '';

                });
            });
            scope.dateChecker = () => {
                let filteredDate = $filter('date')(scope.date, 'yyyy-MM-dd');
                if (typeof filteredDate !== 'undefined') {
                    scope.color = [false, false, false];
                    console.log('setting $scope.availability with + ' + filteredDate);
                    scope.availability = '...';
                    socket.emit('getAvailability', filteredDate);
                }
            };
            socket.on('availability', (data) => {
                console.log('socket.on\'availabilty\'' + data);
                scope.$apply(function () {
                    if (data === 'I\'m available! Let\'s get your day marked.') {
                        scope.color = [true, false, false];
                    }
                    if (data === 'Sorry, I\'m not available this day.') {
                        scope.color = [false, true, false];
                    }
                    if (data === 'Not sure about my availability, contact me!') {
                        scope.color = [false, false, true];
                    }
                    scope.availability = data;
                });
            });
            scope.submit = function () {
                $('#contactForm').fadeOut();
                $('#messageSent').fadeIn();
                socket.emit('contactForm', {
                    name: scope.name,
                    subject: scope.subject + ': ' + $filter('date')(scope.date, 'shortDate'),
                    body: scope.body,
                    email: scope.email,
                    date: $filter('date')(scope.date, 'mediumDate')
                });
                socket.on('resetForm', function (data) {
                    $('#messageSent p').text(data);
                });
            }
        }
    };
};
contactDirective.$inject = ['$filter', '$timeout'];
export {contactDirective};