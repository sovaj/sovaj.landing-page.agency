rmsApp.directive('service', function () {
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
            return 'theme/directives/service/service.html';
        }
    };
}); 
