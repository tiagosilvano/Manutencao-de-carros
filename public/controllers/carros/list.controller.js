angular.module('app')
    .controller('CarroListController', CarroListController);

    CarroListController.$inject = ['CarroService'];

function CarroListController(CarroService){
    var vm = this;
    vm.carros = [];

    function _load() {
        CarroService.findAll()
            .then(function (dados) {
                vm.carros = dados;
            });
    }
    _load();

    vm.excluir = function (id) {
        if (confirm('Deseja realmente excluir?')) {
            CarroService.remove(id)
                .then(function() {
                    _load();
                });
        }
    }
}