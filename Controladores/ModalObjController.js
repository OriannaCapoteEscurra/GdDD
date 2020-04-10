(function(){

    var app= angular.module("GdD");

    var ModalObjController = function($scope, ModalAct){                                    

        $scope.title= ModalAct.data.titulo;

        if(ModalAct.data.item[0]){       
            //$scope.F_creacion= ModalAct.data.item.fecha
            $scope.objInd= ModalAct.data.item[0].objInd;
            $scope.indicador= ModalAct.data.item[0].ind;
            $scope.incide= ModalAct.data.item[0].incide;
            $scope.min= ModalAct.data.item[0].min;
            $scope.meta= ModalAct.data.item[0].meta;
            $scope.max= ModalAct.data.item[0].max;                        
            ModalAct.data.item[0] = null;         
        } else {
            var agg = {
                fecha: " ",
                objEst: " ",
                objInd: " ",
                ind: " ",
                min: " ",
                meta:" ",
                max:" ",
                incide:" ",
                //cumplimiento:$scope.cumplimiento,
                //result: calculado.

            }
        }    

        $scope.crearObj = function(){  
            agg.fecha= $scope.F_creacion;
            agg.objEst= $scope.objEst;
            agg.objInd= $scope.objInd;
            agg.ind= $scope.indicador;
            agg.min= $scope.min;
            agg.meta=$scope.meta;
            agg.max=$scope.max;
            agg.incide=$scope.incide;
                //cumplimiento:$scope.cumplimiento,
                //result: calculado. 
            $scope.$parent.ObjInds.push(agg);

            $scope.$close();
            }
        };
        
    app.controller("ModalObjController", ModalObjController);
    
}());