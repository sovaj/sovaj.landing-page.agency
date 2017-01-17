rmsApp.directive('timeline', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            logo:'@',
            heading: '@',
            desc: '@'
        },
        controller: ['$scope',  function ($scope, $resource) {

            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/timeline/timeline.html';
        }
    };
}); 
