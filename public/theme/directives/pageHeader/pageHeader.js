rmsApp.directive('pageHeader', function () {
    return {
        restrict: 'E',
        scope: {
            heading: '@',
            leadIn: '@',
            action: '@'
        },
        controller: ['$scope',  function ($scope, $resource) {

            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/pageHeader/pageHeader.html';
        }
    };
}); 
