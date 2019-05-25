angular.module('app')
    .service('ManutencaoService', ManutencaoService);

ManutencaoService.$inject = ['$http']

function ManutencaoService ($http) {
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

    service.update = function (id, cliente) {
        return $http.put(URL + '/' + id, cliente)
            .then(function(resp) {
                return resp.data;
            });
    }

    service.remove = function (id) {
        return $http.delete(URL + '/' + id);
    }

    service.insert = function (cliente) {
        return $http.post(URL, cliente)
            .then(function(resp) {
                return resp.data;
            });
    }

}