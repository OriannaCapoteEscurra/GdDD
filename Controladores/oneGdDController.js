(function(){

    var app= angular.module("GdD");

     ModalAct = function(){
        return {
            data:{
                titulo: " ",
                item: []
            }
        }
    }    
    
    var GdDController = function($scope, $modal, $location, ModalAct){             
    /* -------------------- Si es supervisor -> puede editar/crear/eliminar -------------------- */
        if(angular.element(document.querySelector('.active'))) {
            let li= angular.element(document.querySelector('.active'));             
            if (li.attr('id') != "Supervisados"){
                $scope.option = false;
            } else {
                $scope.option = true;
            }                         
/* ------------------- Variables de presentacion en vistas, traidas de BD. --------------- */

/* 
            $scope.oneGdD={
                ObjsInds: [],
                CompInds: [],
                ApYCo : [],
                Segs: [],
                Evaluacion: {}
            }
*/
            $scope.ObjInds=[{ 
                fecha: "2-2-2019",              
                objEst: "A",
                objInd: "A.1",
                ind: "%",
                min: "-5",
                meta:"0",
                max:"+5",
                incide:"30",
                revision: "revision",
                cumplimiento:"110",
                result: ""
            }];

            $scope.CompInds=[{  
                fecha: "27-2-2019",             
                competencia: "Amabilidad",
                ind: "ser amable con el publico",
                incide:"80",                
                cumplimiento:"110",
                result: ""
            }];

            $scope.ApYCom=[{
                fecha: "2-3-2019",
                apoyo: "Comentarios del coordinador",
                compromiso: "comentarios del colaborador"
            }];

            $scope.Segs= [{
                fecha:"5-4-2019",
                tipo:"Competencia",
                ref: "Amabilidad",
                continuar: "comentario 1",
                dejar: "comentario 2",
                comenzar: "comentario 3"
            }];

            $scope.Evaluacion= [{
                fecha:"5-5-2019",
                colaborador:"Comentarios del colaborador",
                coordinador: "Comentarios del coordinador",
                supervisor: "Comentarios del supervisor"
            }];
/*------------------------------------------------------------------------------------------------------------------------------- */        
 
/* --------------------------------------- Activador de Modal de Objetivos Individuales ----------------------------------------- */
            $scope.ModalObj = function(index) {
                if( index == -1){
                    ModalAct.data.titulo = "Nuevo Objetivo";                    
                } else {
                    ModalAct.data.titulo= "Editar Objetivo";
                    ModalAct.data.item[0]= $scope.ObjInds[index];                    
                }
                $location.url("#/supervisados/oneGdD");

                var modalInstance = $modal.open({
                    templateUrl: 'ModalObjs',
                    controller: "ModalObjController",
                    scope: $scope                                       
                });

            }
/* ------------------------------------------------------------------------------------------------------------------ */ 

/* --------------------------------------- Activador de Modal de Competencias Individuales ----------------------------------------- */
            
            $scope.ModalComp = function(index) {                
            
                if( index == -1){
                    ModalAct.data.titulo = "Nuevo Competencia";                    
                } else {
                    ModalAct.data.titulo= "Editar Compeencia";
                    ModalAct.data.item[0]= $scope.CompInds[index];
                }
                $location.url("#/supervisados/oneGdD");

                var modalInstance = $modal.open({
                    templateUrl: 'ModalCompetencia',
                    controller: "ModalCompController"                                                  
                });
            }        
/* ----------------------------------------------------------------------------------------------------------------------------------- */

/* --------------------------------------- Activador de Modal de Apoyo y Compromisos ----------------------------------------- */
            
        $scope.ApyCom = function(index) {            

            if( index == -1){
                ModalAct.data.titulo = "Nuevo Apoyo y Compromiso";                    
            } else {
                ModalAct.data.titulo= "Editar Apoyo y Compromiso";
                ModalAct.data.item[0]= $scope.ApYCom[index];
            }
            $location.url("#/supervisados/oneGdD");

            var modalInstance = $modal.open({
                templateUrl: 'Modal_Apoyo_Compromiso',
                controller: "ModalApComController"
            });            
        }
/* ----------------------------------------------------------------------------------------------------------------------------------- */
    }};

    app.factory( "ModalAct", ModalAct);    
    app.controller("GdDController", GdDController);
    
}());