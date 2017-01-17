rmsApp.directive('timelineItem', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            img:'@',
            date:'@',
            heading: '@',
            desc: '@',
            isInverted: '@'
        },
        controller: ['$scope',  function ($scope, $resource) {

            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/timeline/timeline-item/timeline-item.html';
        }
    };
}); 
