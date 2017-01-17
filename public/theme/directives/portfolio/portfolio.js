rmsApp.directive('portfolio', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            img:'@',
            heading: '@',
            title: '@'
        },
        controller: ['$scope',  function ($scope, $resource) {

            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/portfolio/portfolio.html';
        }
    };
}); 
