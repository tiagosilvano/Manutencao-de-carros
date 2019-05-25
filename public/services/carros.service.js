angular.module('app')
    .service('CarroService', CarroService);

CarroService.$inject = ['$http']

function CarroService ($http) {
    var URL = '/carros';

    var service = this;

    service.findAll = function () {
        return $http.get(URL)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.findOne = function (id) {
        return $http.get(URL + '/' + id)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.update = function (id, carro) {
        return $http.put(URL + '/' + id, carro)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (carro) {
        return $http.post(URL, carro)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.getByPlaca = function(placa){       
        return $http.get(URL + '/byplaca/' + placa)
        .then(function(resp){
            return resp.data
        })
    }

}