var presentation = angular.module("Presentation", ['ngResource']);
presentation.directive('fiddleRenderer', function ($compile) {
    return {
        restrict:'E',
        replace:true,
        transclude:true,
        scope:{fiddle:'bind'},
        template:'<iframe style="width: 100%; height: 600px" src="{{fiddle}}" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'
    }
});

function AppCtrl($scope, $http) {
    $http.get('json/pages.json').success(function (data) {
        $scope.pages = data;
    });

    $scope.animateToId = function (id, container) { //the id to animate, the easing type
        id = "#" + id;
        var $container = $(container); //define the container to move
        var left = $(id).position().left;
        var animSpeed = 2000; //set animation speed
        var ease = "easeOutQuart";
        $container.stop().animate({"left":-(left)}, animSpeed, ease);
    }
}

function MenuCtrl($scope) {
    //placeholder for Menu actions
}

function PageCtrl($scope) {
    //placeholder for Page actions
}

