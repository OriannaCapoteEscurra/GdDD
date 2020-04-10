(function(){
    
    var app = angular.module("GdD", ["ngRoute", 'ui.bootstrap', 'ui.router']);
    
    app.config(function($routeProvider){      
        
        $routeProvider            
            .when("/oneGdD", {
                templateUrl: "Vistas/oneGdD.html",
                controller: "GdDController"
            })
            .when("/supervisados", {
                templateUrl: "Vistas/supervisados.html",
                controller: "SupervisadosController"
            })
            .when("/supervisados/oneGdD", {
                templateUrl: "Vistas/oneGdD.html",
                controller: "GdDController"
            })            
            .otherwise({redirectTo:"/"});
    });
   
    app.controller('menuCtrl', function($scope) {
           
        $scope.MiMenu = function(tab){
            if(angular.element(document.querySelector('.active'))) {
                let oldli= angular.element(document.querySelector('.active'));
                oldli.removeClass('active');
            }
            let li = angular.element(document.querySelector('#'+tab));
            li.addClass('active');            
        };
    });
    
}());
