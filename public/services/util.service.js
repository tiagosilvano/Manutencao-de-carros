angular.module('app')
    .service('UtilService', UtilService);

    function UtilService(){
        var service = this;
        service.getDataAtual = function(){
            var data = new Date();
            return data;
        }

    }
