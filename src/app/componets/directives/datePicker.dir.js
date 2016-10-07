/**
 * Created by jbz on 8/28/2015.
 */
import '../plugins/pickadate.js-3.5.6/lib/legacy';
import '../plugins/pickadate.js-3.5.6/lib/picker';
import '../plugins/pickadate.js-3.5.6/lib/picker.date';

export const datePickerDirective = () => {
    var link = (scope, element, attrs, ngModelCtrl)=> {
        var $input = $(element).pickadate({
            format: 'dddd, mmm dd yyyy',
            formatSubmit: 'mm/dd/yyyy',
            onSet: (context)=> {
                "use strict";
                ngModelCtrl.$setViewValue({date: $input.pickadate('picker').get('select', 'mm/dd/yyyy')});
            }
        });
        /*ngModelCtrl.$formatters.push(function () {
            //console.log('$formatters');
            return {
                date: $input.pickadate('picker').get('select', 'mm/dd/yyyy')
            };
        });*/

        ngModelCtrl.$parsers.push(function (viewValue) {
            return viewValue.date;
        });
    };
    return {
        require: 'ngModel',
        restrict: 'A',
        link
    }
};