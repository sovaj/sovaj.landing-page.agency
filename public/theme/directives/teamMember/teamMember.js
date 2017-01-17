rmsApp.directive('teamMember', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            img:'@',
            name: '@',
            position: '@',
            facebook: '@',
            twitter: '@',
            github: '@',
            linkedin: '@'
        },
        controller: ['$scope',  function ($scope, $resource) {

            }],
        templateUrl: function (elem, attr) {
            return 'theme/directives/teamMember/teamMember.html';
        }
    };
}); 
