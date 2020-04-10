(function(){

    var app= angular.module("GdD");

    var ModalApComController = function($scope, ModalAct){                                    

        $scope.title= ModalAct.data.titulo;

        if(ModalAct.data.item[0]){       
            $scope.F_creacion= ModalAct.data.item[0].fecha
            $scope.apoyo= ModalAct.data.item[0].apoyo;
            $scope.compromiso= ModalAct.data.item[0].compromiso;  
            ModalAct.data.item[0] = null;
        }

        $scope.crearApyCom = function(){
            $scope.$close();
        }
    };
        
    app.controller("ModalApComController", ModalApComController);
    
}());