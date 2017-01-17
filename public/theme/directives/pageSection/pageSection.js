rmsApp.directive('pageSection', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            id:'@',
            heading: '@',
            subHeading: '@', 
            isGray: '@'
        },
        controller: ['$scope',  function ($scope, $resource) {

            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/pageSection/pageSection.html';
        }
    };
}); 
