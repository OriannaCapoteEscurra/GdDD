(function(){

    var app= angular.module("GdD");

    var ModalCompController = function($scope, ModalAct, dateFilter){                            
        $scope.title= ModalAct.data.titulo;        
        if(ModalAct.data.item[0]){                        
            $scope.F_creacion = new Date(2019,1,1);            
            $scope.F_creacion = dateFilter(date, 'MM-dd-yyyy');
            $scope.indicador= ModalAct.data.item[0].ind;
            $scope.incide= ModalAct.data.item[0].incide;
            $scope.comp= ModalAct.data.item[0].competencia;
            $scope.cumplimiento= ModalAct.data.item[0].cumplimiento;
            //ModalAct.data.item[0] = null;
        }        


        $scope.crearComp = function(){                        

            $scope.$close();

            }
        };
        
    app.controller("ModalCompController", ModalCompController);
    
}());