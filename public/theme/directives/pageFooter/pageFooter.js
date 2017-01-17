rmsApp.directive('pageFooter', function () {
    return {
        restrict: 'E',
        scope: {
        },
        controller: ['$scope',  function ($scope, $resource) {
                $scope.now = new Date();
            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/pageFooter/pageFooter.html';
        }
    };
}); 
